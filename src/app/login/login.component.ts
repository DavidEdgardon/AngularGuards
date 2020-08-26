import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService: LoginService) { }

  ngOnInit(): void {
   
  }

  Login(){
   this.authService.login(this.username,this.password)
   let isLogged = this.authService.isLogged()
   if(isLogged){
    this.username = ""
    this.password = ""
   }
   console.log(isLogged)
  }
  
  hasChanges(){
    if(this.username!= "" || this.password != ""){
      return true;
    }
    return false;
  }
}
