import { Injectable } from '@angular/core';
import {Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  //Simulando una base de datos
  //Es un storage de navegador que brinda 5mb
  login(username: string, password: string) {
    let pass = localStorage.getItem(username)
    if (pass == password) {
      localStorage.setItem("isLogged", "true")
      this.router.navigate(["/profile"])
      return true;
    }
    localStorage.setItem("isLogged", "false")
    return false;
  }

  isLogged() {
    let isLogged = localStorage.getItem("isLogged")
    if (isLogged == "true") {
      return true;
    }
    return false;
  }

  logOut(){
    localStorage.setItem("isLogged", "false")
    this.router.navigate(["/login"])
  }
}
