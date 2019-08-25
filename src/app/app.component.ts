import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { KitIconsRegistryService, KitPlatformService } from '@ngx-kit/core';
import { DataService } from './data/data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private icons: KitIconsRegistryService,
              private router: Router,
              private platform: KitPlatformService, private data: DataService) {
    this.icons.add([
      {
        name: 'star',
        url: '/assets/icons/star.svg',
      },
      {
        name: 'cart',
        url: '../assets/icons/cart.svg',
      },
      {
        name: 'avatar',
        url: '../assets/icons/avatar.svg',
      },
      {
        name: 'shopping-cart',
        url: '../assets/icons/shopping-cart.svg',
      }, {
        name: 'search',
        url: '../assets/icons/search.svg',
      },
    ]);
    // scroll to top
    this.router.events.subscribe(event => {
      if (this.platform.isBrowser() && event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    
  }
  ngOnInit() {
    this.data.total = 0;
    this.data.fetchData('/mp/cart').subscribe(data => {
      let apiData = (data as any);
      this.data.bagProduct = JSON.parse(apiData._body).data.items;

      this.data.bagProduct.map((item) => {
        this.data.total = this.data.total + (parseInt(item.itemPrice) * item.itemQuantity);
        this.data.cartCount = this.data.cartCount + item.itemQuantity;
      });
    })
     // localStorage.setItem('Postman-Token','ed3ff088-13da-4c8d-b077-bb084fa1228c')
  }
}
