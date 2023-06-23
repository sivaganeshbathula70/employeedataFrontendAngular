import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private employee:Employee[] = [];
  private baseUrl = 'http://localhost:1133/employee/'

  constructor(private  http:HttpClient) { }
  loademployees():Observable<any>{
    return this.http.get("http://localhost:1133/employee/display");
  }

  deleteEmployee(empuId:Number):Observable<any>{
    return this.http.delete(`http://localhost:1133/employee/delete/${empuId}`, { responseType: 'text' });
  }
  addEmployee(emp:Employee):Observable<any>{
    return this.http.post("http://localhost:1133/employee/addemployee",emp);
  }
  updateEmployee(emp:Employee):Observable<any>{
    return this.http.put("http://localhost:1133/employee/empu",emp);
  }
}
