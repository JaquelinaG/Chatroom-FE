import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.comp.html',
  styleUrls: ['./login.comp.css']
})
export class LoginComp implements OnInit {
  errorMessage: string;
  newUser: boolean;
  loginForm;
  
  constructor( private router: Router,
    private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      name: "",
    });
  }

  ngOnInit() {
  }

  onLogin(value: any) {
    if(value && value.name) {
    localStorage.setItem("name", value.name);

    this.router.navigate(['']);
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}