import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';
import { log } from 'console';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink,RouterOutlet ,CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnInit {
  testform!:FormGroup
  constructor(private api:StudentService,private form:FormBuilder){}
  ngOnInit(): void {
  this.testform=this.form.group({
    hallticketno:[''],
    fullname:[''],
    question:[''],
    answer:[''],
    subject:['']
})


  }
  submittest(){
    this.api.studenttest(this.testform.value).subscribe((res:any)=>{
      console.log(res);
      

    })


  }

}
