import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  color: any;

  size: any;

  product: any = [];
  productImages: any = [];
  recent: Product[];  
  photos: ProductPhoto[];
  constructor(private data: DataService,
    private route: ActivatedRoute) {
      this.product.shipping = [];
      this.product.pricing = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data.fetchData("/mp/products/1").subscribe(data => {
        let apiData = (data as any);
        this.product = (JSON.parse(apiData._body).data[0] as any);
        this.product.assets.map((item) => {
          this.photos  = [{thumb:item.path,full:item.path,description:''}];
          this.photos.push({thumb:item.path,full:item.path,description:''})
        });
        this.data.productByCategory();
      });      
     // this.recent = this.data.products.slice(0, 4);
    });
  }
}
export interface ProductPhoto {
  thumb: string;
  full: string;
  description: string;
}