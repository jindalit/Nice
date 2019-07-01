import { Injectable } from '@angular/core';
import { Product } from './meta';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class DataService {
  public showAlertHandler = new Subject<any>();
  public cartCount: any = 0;
  baseUrl: any = "http://103.50.212.219:8090/CCKNIA";
  baseLocalUrl: any = "http://localhost:8080";
  headers: any;
  requestOptions: any;
  bagProduct: any = [];
  user: any;
  total: any = 0;
  allProducts:any = [];
  categories:any = [];
  constructor(private _http: Http){
    this.headers = new Headers({
      'Content-Type': 'application/json'      
    });
    this.requestOptions = new RequestOptions({ headers: this.headers });
  }
  products:any= {};
  addToCart(id) {
    if (!(event as any).target.classList.contains("disabled")) {
      this.cartCount = this.cartCount + 1
      this.bagProduct.push(this.products.find(p => p.id === parseInt(id, 10)));
      this.showAlert({
        type: "warning", msg: "Added to cart."
      });
      (event as any).target.classList.add("disabled");
    }
  }
  productByCategory(){
    for(var i=0;i<this.categories.length ;i++){
      this.products[this.categories[i].id] = [];
      for(var j=0;j<this.allProducts.length ;j++){
        if(this.allProducts[j].categoryIds[0] == this.categories[i].id){
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
    return this._http.get(this.baseUrl + serviceName, {
      headers : this.headers
    });
  }
  postData(serviceName, params) {
    return this._http.post(this.baseUrl + serviceName, params, this.requestOptions);
  }

}
