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
     this.data.postData("/login",{"userName":"cm_nice","password":"cm_nice"}).subscribe(data => {
      let apiData = (data as any);
      const token = JSON.parse(apiData._body).id;
      this.data.headers.set('Postman-Token',`Bearer ${token}`);
      this.data.fetchData("/mp/products").subscribe(data => {
        let apiData = (data as any);
        this.data.allProducts = JSON.parse(apiData._body).data;
        this.data.fetchData("/mp/categories").subscribe(data => {
          let apiData = (data as any);
          this.data.categories = JSON.parse(apiData._body).data;
          this.data.productByCategory();
        }); 
      }); 
    });    
  }
}
