import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginData } from '../classes/login-data';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginData = new LoginData("","");
  constructor(private authService: AuthService, private router: Router,public flashMessagesService:  FlashMessagesService) {if(this.authService.loggedIn()){

  }
 
    
  {this.authService.isloggedin}}
  
  
  ngOnInit(): void {

  }
  onLoginSubmit() {
    const loginData = new LoginData(this.loginData.email, this.loginData.password);
    
    this.authService.authenticateUser(loginData).subscribe(res => {
     
      if(res.result) {
        this.authService.storeUserData(res.token, res.result);
        this.authService.isloggedin = true
        this.authService.user = res.result
       
        this.router.navigate(['ticket']);
      
     
        
      }
      if(res.message) {
      
        this.flashMessagesService.show(res.message, { cssClass: 'alert-danger', timeout: 4500});
        this.router.navigate(['login']);
      }
    
    });
  }
}
