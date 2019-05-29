import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  inputModel: any;

  displayMenu = false;

  menuAnchor: any;

  constructor(public el: ElementRef, private dataService:DataService) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
  }
}
