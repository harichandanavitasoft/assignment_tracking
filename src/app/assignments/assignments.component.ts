import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [RouterLink,RouterOutlet ,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  info:any;
  
  constructor(private api:FacultyService,private form:FormBuilder ){}
  ngOnInit(): void {
    this.api.viewassignments().subscribe((res:any)=>{
      console.log(res);
      this.info=res;
      
    })
    
  }


}
