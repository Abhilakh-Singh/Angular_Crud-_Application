import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  addprofile(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/profile',data);
  }
 
  loginApi(): Observable<any>{
    return this.http.get("http://localhost:3000/profile")
  }
   deleteEmpData(id:number):Observable<any>{
     return this.http.delete("http://localhost:3000/profile/"+id);
  }
   getEmployeeData(): Observable<any>{
    return this.http.get("http://localhost:3000/profile");
   }
}

