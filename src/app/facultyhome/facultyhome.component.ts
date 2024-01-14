import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-facultyhome',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './facultyhome.component.html',
  styleUrl: './facultyhome.component.css'
})
export class FacultyhomeComponent implements OnInit {
       data:any;
     profile:any;
  constructor(private api:FacultyService,private form:FormBuilder){}
  ngOnInit(): void {
   
    let id=localStorage.getItem("id");
    this.api.facultyProfile(id).subscribe((res:any)=>{
      this.data= res;

    })
    
  }
  }



