import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  
  emp:Employee=new Employee();
  constructor(private employeeService:EmployeeserviceService,private route:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addEmployee()
  {
this.employeeService.addEmployee(this.emp).subscribe(data=>{this.emp=data;},);  this.route.navigateByUrl("/user");
    
  }

}
