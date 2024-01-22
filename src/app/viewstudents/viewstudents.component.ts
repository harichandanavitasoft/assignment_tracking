import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-viewstudents',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './viewstudents.component.html',
  styleUrl: './viewstudents.component.css'
})
export class ViewstudentsComponent implements OnInit{
  data:any;
  constructor(private api:FacultyService, private form:FormBuilder){}
  ngOnInit(): void {
    this.api.viewstudents().subscribe((res:any)=>{
      console.log(res);
      this.data = res;
      
    })
   
  }
 

}
