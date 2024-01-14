import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-facultylogin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule, FormsModule,ReactiveFormsModule],
  templateUrl: './facultylogin.component.html',
  styleUrl: './facultylogin.component.css'
})
export class FacultyloginComponent  implements OnInit{
  facultyloginform!:FormGroup;
 constructor(private api:FacultyService,private form:FormBuilder,private route:Router){}
  ngOnInit():void{
  
    this.facultyloginform=this.form.group({
      facultyid:[''],
      password:['']
    })
  }
  facultylogin(){
    this.api.facultyLogin(this.facultyloginform.value).subscribe((res:any)=>{
      console.log(res);
      if(res){
        alert("Login sucessful")
      }
      else{
        alert("Login Failed")
      }
      this.route.navigate(['/facultyhome'])
    })
  }


}
