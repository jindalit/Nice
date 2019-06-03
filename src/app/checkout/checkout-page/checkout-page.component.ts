import { Component, OnInit } from '@angular/core';
import{DataService} from '../../data/data.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  inputModel: any;

  radioModel: any;

  selectModel: any;

  constructor(private data:DataService) {
  }

  ngOnInit() {
  }
}
