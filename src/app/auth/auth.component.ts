import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authservice.isAuth;
  }
  OnSignIn() {
    //then 5ater asynchrone amlneha ahna
    this.authservice.signIn().then(
      () => {
        console.log("connecté");
        this.router.navigate(['appareil']);
        this.authStatus = this.authservice.isAuth;
      }
    );
  }
  OnSignOut() {
    this.authservice.signOut();
    this.authStatus = this.authservice.isAuth;
  }

}
