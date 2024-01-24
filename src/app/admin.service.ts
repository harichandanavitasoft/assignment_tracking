import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 jwttoken():any{
  const header={
    headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
  };
  return header;
 }
  constructor(private http:HttpClient) { }
   adminLogin(data:any){
    return this.http.post("http://localhost:5000/admin/login",data);
  }
  addFaculty(data:any){
    return this.http.post("http://localhost:5000/faculty/create",data)
  }
  viewFaculty(){
    return this.http.get("http://localhost:5000/getfaculty",this.jwttoken());
  }
  Deletefaculty(id:any){
    return this.http.delete("http://localhost:5000/deletefaculty/"+id)
  }
  Editfaculty(data:any){
    return this.http.put("http://localhost:5000/editfaculty/"+data.id,data)
  }
}
