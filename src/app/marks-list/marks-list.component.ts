import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-marks-list',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './marks-list.component.html',
  styleUrl: './marks-list.component.css'
})
export class MarksListComponent implements OnInit {
  data:any
  constructor(private api :FacultyService, private form:FormBuilder){}
  ngOnInit(): void {
    
    let markslist = localStorage.getItem('ht');
    console.log(markslist,'uname');
     this.api.viewanswers().subscribe((res:any)=>{
      console.log(res);
      this.data=res.filter((u:any) => u.hallticketno == markslist)

    });

   
  }

}
