import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.scss']
})
export class DisplayEmpComponent implements OnInit{
  employee:Employee[] = [];
  deleteMessage= false;

  constructor(private employeeservice:EmployeeserviceService){}
 
    ngOnInit(): void {
    this.employeeservice.loademployees().subscribe(data=>this.employee=data);
  }
  deleteEmployee(empuId:number): void {
    let r = confirm("Are You Sure You want To delete?");
    if (r)
      this.employeeservice.deleteEmployee(empuId).subscribe(
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.employeeservice.loademployees().subscribe(data =>{  
            this.employee =data  
            })  
        },  
        error => console.log(error));  
  }  ;

}
