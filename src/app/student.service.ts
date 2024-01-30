import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  jwttoken():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer ' +localStorage.getItem('stoken')})
    };
    return header;
   }
  constructor(private http:HttpClient) { }
  studentregister(data:any){
    return this.http.post("http://localhost:5000/student/create",data)
  }
  studentlogin(data:any){
    return this.http.post("http://localhost:5000/student/login",data)
  }
  studentprofile(id:any){
    return this.http.get("http://localhost:5000/studentprofile/"+id,this.jwttoken())
  }
  studenttest(data:any){
    return this.http.post("http://localhost:5000/tests",data,this.jwttoken())
  }
  editstudent(data:any){
    return this.http.put("http://localhost:5000/editstudent/"+data.id,data,this.jwttoken())
  }
  Password(data:any){
    return this.http.post("http://localhost:5000/student/forgotpassword",data,this.jwttoken())
  }
 
}
