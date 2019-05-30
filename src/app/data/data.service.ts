import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  public cartCount: any = 3;
  products: Product[] = [
    {
      id: 1,
      title: 'Tata Sampann Moong Dal Split, 1kg',
      description: 'An important part of the Indian diet, Moong Dal is a good and filling option for those who want to shed kilos. It is extremely light and easy to digest since it has minimal calories but is packed with protein.',
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
    }, {
      id: 2,
      title: 'Coconut Board',
      description: '<ul><li>It can be a promising material due to its beautiful grain and attractive natural appearance. </li><li> It has potential for the manufacture of high value and export-quality finished products. </li><li>However, like many other conventional wood species untreated freshly-cut lumber can be easily attacked by mould and staining fungi especially if the material is not properly stacked and is exposed to humid environment during the air drying process.</li><li>Further degradation during air drying can also be caused by decay fungi and pinhole borers.</li><li>Hence, prophylactic treatment is necessary if it is used for the production of high value products for export.</li></ul>',
      picture: '/assets/others/coconut.jpg',
      price: 90,
      sale: 65,
      photos: [
        {
          thumb: '/assets/others/coconut.jpg',
          full: '/assets/others/coconut.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/coconut2.jpg',
          full: '/assets/others/coconut2.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/coconut3.jpg',
          full: '/assets/others/coconut3.jpg',
          description: 'Jacket',
        },
      ],
    } ,{
      id: 3,
      title: 'Basmati Rice, 5Kg',
      description: 'Basmati (pronounced IPA: [baːsmət̪iː] in the Indian subcontinent) is a variety of long, slender-grained aromatic rice which is traditionally from the Indian subcontinent.[1] As of 2014, India exported 65% of the overseas basmati rice market, while Pakistan accounted for the remainder, according to the Indian state-run Agricultural and Processed Food Products Export Development Authority.[2] However, many countries use domestically grown basmati rice crops',
      picture: '/assets/others/rice.jpeg',
      price: 690,
      sale: 565,
      photos: [
        {
          thumb: '/assets/others/rice.jpeg',
          full: '/assets/others/rice.jpeg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/rice3.jpg',
          full: '/assets/others/rice3.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/others/Basmati_Rice.jpg',
          full: '/assets/others/Basmati_Rice.jpg',
          description: 'Jacket',
        },
      ],
    }
  ];
}
