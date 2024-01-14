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
  isAddMode!: boolean;
  loading = false;
  selectedphoto: any;
  
  facultydata!: any;
  constructor(private api: AdminService, private form: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.isAddMode = true;
    
    this.api.viewFaculty().subscribe((res: any) => {
      
      this.facultydata = res;
    })
    const password = Math.floor(Math.random() * 1000655 + 2);
    this.Facultyform = this.form.group({
      id: [''],
      facultyid: [''],
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
    let facultylist = {
      ...this.Facultyform.value,
      image: this.selectedphoto
    }
    this.api.addFaculty(facultylist).subscribe((res: any) => {
      window.location.reload();
    })
  }
  deletefaculty(id: any) {

    this.api.Deletefaculty(id).subscribe((res: any) => {
      window.location.reload();

    })
  }
  onSubmit() {

    if (this.isAddMode) {
      this. addfaculty() ;
    } else {
      this.updateUser();
    }
  }
private updateUser() {
    this.api.Editfaculty(this.Facultyform.value).subscribe((res:any)=>{
      window.location.reload();
    })

      
        
  }




  editfaculty(d:any){
  this.isAddMode = false;
  this.Facultyform.patchValue({
    id:d._id,
    facultyid:d.facultyid,
    fullname:d.fullname,
    email: d.email,
    branch: d.branch,
    year: d.year,
    address:d.address,
    gender:d.gender,
    mobileno: d.mobileno,
    subject: d.subject,
    designation: d.designation,
    image: d.image,

  })




}

}