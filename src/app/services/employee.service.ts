import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  delete() {
    throw new Error('Method not implemented.');
  }
  constructor(private _http:HttpClient) { }
 
//add data
  addEmployee(data:any): Observable<any>{
    return this._http.post("http://localhost:3000/employee",data)
  }
//update data
 updateEmployee(id:number,data:any): Observable<any>{
    return this._http.put("http://localhost:3000/employee/"+id,data);
  }
//get data
  getEmployeeList(): Observable<any>{
    return this._http.get("http://localhost:3000/employee");
  }
  //delete data
  deleteEmployee(id:number):Observable<any>{
    return this._http.delete("http://localhost:3000/employee/"+id);
  }
}
