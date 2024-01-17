import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-addassignments',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './addassignments.component.html',
  styleUrl: './addassignments.component.css'
})
export class AddassignmentsComponent implements OnInit {
  Assignemntform!:FormGroup
  constructor(private api:FacultyService,private form:FormBuilder,private route:Router){}
  ngOnInit(): void {
    this.Assignemntform=this.form.group({
      facultyid:[''],
      question:[''],
      subject:['']
    })

    
  }
  addassignment(){
    this.api.Addassignment(this.Assignemntform.value).subscribe((res:any)=>{
    console.log(res);

    

    })

  }

}
