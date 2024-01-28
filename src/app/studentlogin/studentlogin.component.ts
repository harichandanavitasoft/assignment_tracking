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
  constructor(private api:StudentService,private form:FormBuilder,private route:Router){}
  ngOnInit(): void {

    this.studentloginform = this.form.group({
      hallticketno:[''],
      password:['']

    })
   
  }
  studentlogin(){
    this.api.studentlogin(this.studentloginform.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("id",res._id)
      localStorage.setItem("ht",res.hallticketno)
      console.log(res.hallticketno);
      
      if(res){
        alert("Login sucessful")
      }
      else{
        alert("Login Failed")
      }
      this.route.navigate(['/studenthome'])

      
    })
  }
}
