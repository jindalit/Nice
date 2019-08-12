import { Component, OnInit } from '@angular/core';
import{DataService} from '../../data/data.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  inputModel: any;
  address:any =[];
  radioModel: any;

  selectModel: any;

  constructor(private data:DataService) {
  }

  ngOnInit() {
    this.data.fetchData('/mp/cart').subscribe(data => {
      let apiData = (data as any);
      this.data.bagProduct = JSON.parse(apiData._body).data.items;

      this.data.bagProduct.map((item) => {
        this.data.total = this.data.total + (parseInt(item.itemPrice) * item.itemQuantity);
        this.data.cartCount = this.data.cartCount + item.itemQuantity;
      });
    })
    this.data.fetchData('/mp/shippingAddress').subscribe(data => {
      this.address = JSON.parse((data as any)._body).data;
    })
  }
}
