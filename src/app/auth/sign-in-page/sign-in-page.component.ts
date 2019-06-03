import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  userPwd: any = "";
  userEmail: any = "";
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    if (this.userEmail == "" || this.userPwd == "") {
      this.data.showAlert({
        type: "danger", msg: "Please enter username and password."
      });
    }
    else {
      localStorage.setItem(
        "userObj", this.userEmail
      );
      this.data.showAlert({
        type: "success", msg: "Login successfully"
      });
      this.data.user =  (this.userEmail).toUpperCase();
      this.router.navigate(["/home"]);
    }
  }
}
