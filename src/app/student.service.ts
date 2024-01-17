import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  studentregister(data:any){
    return this.http.post("http://localhost:5000/student/create",data)
  }
  studentlogin(data:any){
    return this.http.post("http://localhost:5000/student/login",data)
  }
}
