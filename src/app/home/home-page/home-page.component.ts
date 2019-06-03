import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  inputModel: any;

  constructor(private data:DataService) {
  }

  ngOnInit() {
    
  }
}
