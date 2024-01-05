import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewfaculty',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './viewfaculty.component.html',
  styleUrl: './viewfaculty.component.css'
})
export class ViewfacultyComponent implements OnInit {
  Facultyform!: FormGroup

  selectedphoto: any;
  facultydata!: any;
  constructor(private api: AdminService, private form: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.api.viewFaculty().subscribe((res: any) => {
      this.facultydata = res;
      console.log(res, 'facultydata');

    })



    const password = Math.floor(Math.random() * 1000655 + 2);
    console.log(password);

    this.Facultyform = this.form.group({
      facultyid:[''],
      fullname: [''],
      email: [''],
      branch: [''],
      year: [''],
      address: [''],
      gender: [''],
      mobileno: [''],
      subject: [''],
      designation: [''],
      image: [''],
      password: password
    })
  }
  selectphoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      var profile = new FileReader();
      profile.readAsDataURL(event.target.files[0])
      profile.onload = (event) => {
        this.selectedphoto = event.target?.result;

      }
    }



  }
  addfaculty() {
    // if(this.selected){
    let facultylist = {
      ...this.Facultyform.value,
      image: this.selectedphoto
    }
    this.api.addFaculty(facultylist).subscribe((res: any) => {
      window.location.reload();
      console.log(res, 'faculty chechking')
    })

  }



}
