import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  public cartCount:any=3;
  products: Product[] = [
    {
      id: 1,
      title: 'Tata Sampann Moong Dal Split, 1kg',
      description: 'The Roxy Women\'s Jetty Block Snow Jacket combines a great look with alpine performance!',
      picture: '/assets/others/pulses/moong.jpg',
      price: 131,
      sale: 118,
      photos: [
        {
          thumb: '/assets/others/pulses/moong.jpg',
          full: '/assets/others/pulses/moong.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/pulses/moong2.jpg',
          full: '/assets/others/pulses/moong2.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/pulses/unpolished.jpg',
          full: '/assets/others/pulses/unpolished.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/pulses/power.jpg',
          full: '/assets/others/pulses/power.jpg',
          description: 'Jacket',
        },
      ],
    }
  ];
}
