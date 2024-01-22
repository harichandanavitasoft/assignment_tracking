import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-facultyprofile',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './facultyprofile.component.html',
  styleUrl: './facultyprofile.component.css'
})
export class FacultyprofileComponent implements OnInit {
  Facultyform!:FormGroup;
  user :any;
  data:any;
  constructor(private api:FacultyService, private edit: AdminService,  private form:FormBuilder){}
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    console.log(id);
    
    this.api.facultyProfile(id).subscribe((res:any)=>{
    
      
      this.data= res;
      

    })
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
      
    })
   
  
  }
  editprofile(data:any){
    console.log(data);
    
     this.Facultyform.patchValue({
      id:data._id,
      facultyid:data.facultyid,
      fullname:data.fullname,
      email: data.email,
      branch: data.branch,
      year: data.year,
      address:data.address,
      gender:data.gender,
      mobileno: data.mobileno,
      subject: data.subject,
      designation: data.designation,
      image: data.image,
  
    })
  
  }
  updateprofile(){
    this.edit.Editfaculty(this.Facultyform.value).subscribe((res:any)=>{
      window.location.reload();
    })

  }
}