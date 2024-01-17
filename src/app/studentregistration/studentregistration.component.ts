import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentregistration',
  standalone: true,
  imports: [ RouterLink,RouterOutlet ,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studentregistration.component.html',
  styleUrl: './studentregistration.component.css'
})
export class StudentregistrationComponent implements OnInit {
  studentform!:FormGroup
  selectedphoto: any;

  constructor(private api:StudentService,private form:FormBuilder){}
  ngOnInit(): void {
    
     const password = Math.floor(Math.random()*1000655 + 2);
     this.studentform=this.form.group({
      id: [''],
      hallticketno: [''],
      fullname: [''],
      email: [''],
      branch: [''],
      year: [''],
      address: [''],
      gender: [''],
      mobileno: [''],
      dateofbirth:[''],
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

  addstudent(){

    let studentdata= {
      ...this.studentform.value,
      image: this.selectedphoto
    }
    this.api.studentregister(studentdata).subscribe((res: any) => {
     console.log(res);
     
    })
  }
  }
 