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
  facultyProfile(id:any){
    return this.http.get("http://localhost:5000/facultyid/"+id)
  }
  Addassignment(data:any){
    return this.http.post("http://localhost:5000/addassignment",data)
  }
  viewassignments(){
    return this.http.get("http://localhost:5000/assignments")
  }
  viewanswers(){
    return this.http.get("http://localhost:5000/gettests")
  }
  viewstudents(){
    return this.http.get("http://localhost:5000/getstudents")
  }

 edittest(data:any){
  return this.http.put("http://localhost:5000/edittest/"+data.id,data)
 }


}
