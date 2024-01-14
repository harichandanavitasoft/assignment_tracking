import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-facultyprofile',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './facultyprofile.component.html',
  styleUrl: './facultyprofile.component.css'
})
export class FacultyprofileComponent implements OnInit {
  user :any;
  data:any;
  constructor(private api:FacultyService,private form:FormBuilder){}
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.api.facultyProfile(id).subscribe((res:any)=>{
      this.data= res;

    })
    
  }
  

}
