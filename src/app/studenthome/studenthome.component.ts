import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';
import { info } from 'console';

@Component({
  selector: 'app-studenthome',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studenthome.component.html',
  styleUrl: './studenthome.component.css'
})
export class StudenthomeComponent implements OnInit {
  info:any;
  constructor(private api:StudentService,private form:FormBuilder){}
  ngOnInit(): void {
    
    let studentid=localStorage.getItem("id");
    this.api.studentprofile(studentid).subscribe((res:any)=>{
      this.info= res;

    })
    
    
  }
  Logout(){
   let l= localStorage.removeItem("student")
   console.log(l);
   
  }

}
