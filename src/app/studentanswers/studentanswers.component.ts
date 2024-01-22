import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';


@Component({
  selector: 'app-studentanswers',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studentanswers.component.html',
  styleUrl: './studentanswers.component.css'
})
export class StudentanswersComponent implements OnInit {
  testdata:any;
  constructor(private api:FacultyService,private form:FormBuilder){}
  ngOnInit(): void {
  
    this.api.viewanswers().subscribe((res:any)=>{
      console.log(res);
      this.testdata=res;
      
    })
    
  }

}
