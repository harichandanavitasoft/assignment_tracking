import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-studentlogin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studentlogin.component.html',
  styleUrl: './studentlogin.component.css'
})
export class StudentloginComponent implements OnInit {
  studentloginform!:FormGroup
  passwordform!:FormGroup
  data:any
  constructor(private api:StudentService,private form:FormBuilder,private route:Router){}
  ngOnInit(): void {

    this.studentloginform = this.form.group({
      hallticketno:[''],
      password:[''],
    

    })
    this.passwordform=this.form.group({
      email:['']
    })
   
  }
  studentlogin(){
    this.api.studentlogin(this.studentloginform.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("student",res)
      localStorage.setItem("id",res.student._id)
      localStorage.setItem("ht",res.student.hallticketno)
      localStorage.setItem("stoken",res.token)
    
   
      
      if(res){
        alert("Login sucessful")
      }
      else{
        alert("Login Failed")
      }
      this.route.navigate(['/studenthome'])

      
    })
  }
  password(){
    this.api.Password(this.passwordform.value).subscribe((res:any)=>{
      console.log(res);
     this.data=res;
      
    })
  }
}
