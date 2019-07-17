import { Injectable } from '@angular/core';
import { Product } from './meta';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class DataService {
  public showAlertHandler = new Subject<any>();
  public cartCount: any = 0;
  jwtHelper: JwtHelperService = new JwtHelperService();
  baseUrl: any = "http://103.50.212.219:8090/CCKNIA";
  baseLocalUrl: any = "http://localhost:8080";
  headers: any;
  requestOptions: any;
  //formData: FormData = new FormData();
  bagProduct: any = [];
  user: any;
  total: any = 0;
  allProducts: any = [];
  categories: any = [];
  constructor(private _http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.requestOptions = new RequestOptions({ headers: this.headers });
  }
  products: any = {};
  addToCart(id) {
    if (!(event as any).target.classList.contains("disabled")) {
      this.postData('/mp/cart', { 'itemId': id, 'itemQuantity': "1" }).subscribe(data => {
        this.cartCount = this.cartCount + 1
       // this.bagProduct.push(this.products.find(p => p.id === parseInt(id, 10)));
        this.showAlert({
          type: "warning", msg: "Added to cart."
        });        
      });
      (event as any).target.classList.add("disabled");
    }
  }
  checkAlreadyLoggedIn() {
    const token = localStorage.getItem('access_token');
    return this.checkTokenExpired(token);
  }

  checkTokenExpired(token) {
    if (!token)
      return false

    const expiration_date = this.jwtHelper.getTokenExpirationDate(token)
    const current_date = new Date();
    if (current_date < expiration_date) {
      return true;
    } else {
      return false;
    }
  }

  productByCategory() {
    for (var i = 0; i < this.categories.length; i++) {
      this.products[this.categories[i].id] = [];
      for (var j = 0; j < this.allProducts.length; j++) {
        if (this.allProducts[j].categoryIds[0] == this.categories[i].id) {
          //this.products.push(this.categories[i].id = this.allProducts[j])
          this.products[this.categories[i].id].push(this.allProducts[j]);

        }
      }
    }
  }
  showAlert(option) {
    this.showAlertHandler.next(option);
  }
  fetchData(serviceName) {
   // const token = localStorage.getItem('JSESSIONID');
    this.headers.set('X-Requested-With', "Mobile");
    return this._http.get(this.baseUrl + serviceName + "?token=" + localStorage.getItem("token"), {
      headers: this.headers
    });
  }
  postData(serviceName, params) {
    this.headers.set('X-Requested-With', "Mobile");
    return this._http.post(this.baseUrl + serviceName+ "?token=" + localStorage.getItem("token"), params, this.requestOptions);
  }

}
