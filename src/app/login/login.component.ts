import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signnewUsers: any[] = [];
  constructor(
    
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  signupObj:any = {
    userName:'',
    email:'',
    password:''
  };
  loginObj: any = {
    userName:'',
    password:''
  };
  ngOnInit(): void {
    const localDate = localStorage.getItem('signNewUsers');
    if(localDate!=null){
      this.signnewUsers = JSON.parse(localDate);
    }
  }
  onSignUp(){
    this.signnewUsers.push(this.signupObj);
    localStorage.setItem('signNewUsers',JSON.stringify(this.signnewUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password:''
    };

  }
  onLogin(){
    debugger
    const isUserExist = this.signnewUsers.find(m=>m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      this.router.navigate(["/user"]);
      
    }else{
      alert('Wrong credentials');
    }


  }

}
