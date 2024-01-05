import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private http:HttpClient) { }
   adminLogin(data:any){
    return this.http.post("http://localhost:5000/admin/login",data);
  }
  addFaculty(data:any){
    return this.http.post("http://localhost:5000/faculty/create",data)
  }
  viewFaculty(){
    return this.http.get("http://localhost:5000/getfaculty")
  }
}
