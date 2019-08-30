import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phonenumber: string;
  password: string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() : void {
    if(this.phonenumber == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
