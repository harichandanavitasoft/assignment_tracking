import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-studentprofile',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studentprofile.component.html',
  styleUrl: './studentprofile.component.css'
})
export class StudentprofileComponent  implements OnInit{
  data:any
  Editform:any;
constructor(private api:StudentService,private form:FormBuilder){}
 ngOnInit(): void {
    let studentid=localStorage.getItem("id");
    this.api.studentprofile(studentid).subscribe((res:any)=>{
      this.data= res;

    })
    this.Editform = this.form.group({
      id: [''],
     hallticketno:[''],
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
    
     this.Editform.patchValue({
      id:data._id,
      hallticketno:data.hallticketno,
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
    this.api.editstudent(this.Editform.value).subscribe((res:any)=>{
      window.location.reload();
    })

  }


}
