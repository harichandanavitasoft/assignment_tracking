import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { log } from 'node:console';


@Component({
  selector: 'app-studentanswers',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studentanswers.component.html',
  styleUrl: './studentanswers.component.css'
})
export class StudentanswersComponent implements OnInit {
  testdata:any;
  Editform!:FormGroup;
  constructor(private api:FacultyService,private form:FormBuilder){}
  ngOnInit(): void {
  
    this.api.viewanswers().subscribe((res:any)=>{
      console.log(res);
      this.testdata=res;
      
    })
    this.Editform=this.form.group({
      id:[''],
      hallticketno:[''],
      fullname:[''],
      question:[''],
      answer:[''],
      subject:[''],
      marks:['']
    })
    
  }
  edit(data:any){
    this.Editform.patchValue({
      id:data._id,
    hallticketno:data.hallticketno,
    fullname:data.fullname,
    question:data.question,
    answer:data.answer,
    subject:data.subject,
    marks:data.marks
    })
  }
  update(){
    this.api.edittest(this.Editform.value).subscribe((res:any)=>{
      console.log(res);
      window.location.reload();
      
    })
  }

}
