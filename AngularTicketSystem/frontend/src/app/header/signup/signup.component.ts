import { Component, OnInit } from '@angular/core';

import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model = new User("","", "", "","");

  constructor(private userService: UserService,
    private router: Router,
    public flashMessagesService:  FlashMessagesService
    ) { }
    onRegisterSubmit() {
      this.userService
      .registerUser(this.model)
      .subscribe(res => {
        if(res.result) {

          this.flashMessagesService.show("Registered successfully", { cssClass: 'alert-success', timeout: 5500});
          this.router.navigate(['/login']);
        }
        if(res.message) {
          
          this.flashMessagesService.show(res.message, { cssClass: 'alert-danger', timeout: 4500});
          this.router.navigate(['/register']);
        }
      }); 
    }
  ngOnInit(): void {
  }

}
