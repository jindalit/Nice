import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service'
@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.scss']
})
export class BagPageComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.total = 0;
    this.data.cartCount = 0;
    this.data.fetchData('/mp/cart').subscribe(data => {
      let apiData = (data as any);
      this.data.bagProduct = JSON.parse(apiData._body).data.items;

      this.data.bagProduct.map((item) => {
        this.data.total = this.data.total + (parseInt(item.itemPrice) * item.itemQuantity);
        this.data.cartCount = this.data.cartCount + item.itemQuantity;
      });
    })
    
  }
  removeItem(id) {
    this.data.cartCount = this.data.cartCount - 1;
    this.data.bagProduct.splice(id, 1);
    this.data.total = 0;
    this.data.bagProduct.map((item) => {
      this.data.total = this.data.total + (parseInt(item.itemPrice) * item.itemQuantity);
    });
  }
  updateQuantity(event, amount) {
    if (event.target.innerText == "-") {
      this.data.total = this.data.total - amount;
      this.data.cartCount = this.data.cartCount - 1;
    }
    else {
      this.data.total = this.data.total + amount;
      this.data.cartCount = this.data.cartCount + 1;
    }
  }
}
