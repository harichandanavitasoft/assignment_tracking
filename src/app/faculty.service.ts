import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  jwttoken():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer ' +localStorage.getItem('ftoken')})
    };
    return header;
   }

  constructor(private http:HttpClient) { }
  facultyLogin(data:any){
    return this.http.post("http://localhost:5000/faculty/login",data)
  }
  facultyProfile(id:any){
    return this.http.get("http://localhost:5000/facultyid/"+id,this.jwttoken())
  }
  Addassignment(data:any){
    return this.http.post("http://localhost:5000/addassignment",data,this.jwttoken())
  }
  viewassignments(){
    return this.http.get("http://localhost:5000/assignments",this.jwttoken())
  }
  viewanswers(){
    return this.http.get("http://localhost:5000/gettests",this.jwttoken())
  }
  viewstudents(){
    return this.http.get("http://localhost:5000/getstudents",this.jwttoken())
  }

 edittest(data:any){
  return this.http.put("http://localhost:5000/edittest/"+data.id,data,this.jwttoken())
 }
 Password(data:any){
  return this.http.post("http://localhost:5000/faculty/password",data,this.jwttoken())
}


}
