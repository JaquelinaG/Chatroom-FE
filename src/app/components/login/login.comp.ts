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

      let validation = this.validateName(value.name);

      if(validation == null){
        localStorage.setItem("name", value.name);

        this.router.navigate(['']);
      } else {
        window.alert(validation);
      }    
    }
  }

  private validateName(name: string) : string {
    if(name.trim().length == 0) {
      return "Name can not be empty!"
    }
    if(name == "bot") {
      return "Name bot is invalid!";
    }

    return null;
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}