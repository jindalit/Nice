import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  inputModel: any;

  displayMenu = false;

  menuAnchor: any;

  constructor(public el: ElementRef, private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
    this.dataService.user = localStorage.getItem("userObj") ? localStorage.getItem("userObj").toUpperCase() : "Sign In";
  }
  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = this.dataService.baseUrl;
  }
}
