import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  public totalItem : number = 0;
  public searchTerm !: string;
  // public isLoggedIn: boolean = false;
  constructor(public AuthService:AuthService,public router: Router) {this.AuthService.user
    if(this.AuthService.loggedIn()){
      this.AuthService.isloggedin= true;
      this.router.navigate(['ticket'])

    }
  }

  ngOnInit(): void {
   
  }

  onLogoutClick() {
    // this.cartService.removeAllCart();
    this.AuthService.logout();
    this.AuthService.isloggedin = false;
    this.router.navigate(['/home']);
    localStorage.clear();
  }

}
