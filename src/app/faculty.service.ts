import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient) { }
  facultyLogin(data:any){
    return this.http.post("http://localhost:5000/faculty/login",data)
  }
}
