import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  emp:Employee[] = [];
  empvalues:Employee = new Employee();
  errorInfo:String;
  info: any;
  constructor(private employeservice:EmployeeserviceService,private route:Router) { }
  
  updateEmployee(){
    this.employeservice.updateEmployee(this.empvalues).subscribe(data=>
      {
        this.empvalues=data;
        this.info=data;
        
      },error=>{
        this.info=undefined;
        this.errorInfo=JSON.stringify(error.error.text);
      }
      );
      this.route.navigateByUrl("/user");

    }
  


}

