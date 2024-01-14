import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit{
AdminLoginform !:FormGroup;
constructor( private api:AdminService, private form:FormBuilder,private route:Router){

}

  ngOnInit(): void {
    this.AdminLoginform = this.form.group({
      username:[''],
      password:['']
    })
  }
  
  adminlogin(){
    
    this.api.adminLogin(this.AdminLoginform.value).subscribe((res:any)=>{
      if(res){
        alert("Login sucessful")
      }
      else{
        alert("Login Failed")
      }
      this.route.navigate(['/adminhome'])
      
    })
  
  
  }

}
