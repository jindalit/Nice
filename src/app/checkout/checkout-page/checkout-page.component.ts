import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  inputModel: any;
  address: any = [];
  billingaddress: any = [];
  radioModel: any;

  selectModel: any;

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit() {
    this.data.fetchData('/mp/shippingAddress').subscribe(data => {
      this.address = JSON.parse((data as any)._body).data;
    })
    this.data.fetchData('/mp/billingAddress').subscribe(data => {
      this.billingaddress = JSON.parse((data as any)._body).data;
    })
  }
  confirmOrder() {
    this.data.postData('/mp/shippingAddress/update', JSON.stringify(this.address)).subscribe(data => {
      this.data.postData('/mp/billingAddress/update', JSON.stringify(this.billingaddress)).subscribe(data => {
        this.data.postData('/mp/order/confirm', {}).subscribe(data => {
          this.data.showAlert({
            type: "success", msg: "Order Placed Successfully."
          });
          this.router.navigate(["/home"]);
          this.data.total = 0;
          this.data.cartCount = 0;

        });
      });
    });
  }
}
