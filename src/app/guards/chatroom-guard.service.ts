import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatroomGuard implements CanActivate {
  
  constructor(private router: Router) {
  }
  
  canActivate() {
    var name = localStorage.getItem("name");
 
    if (name){
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }
}