import { Injectable } from '@angular/core';
import { Product } from './meta';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DataService {
  public showAlertHandler = new Subject<any>();
  public cartCount: any = 0;
  bagProduct: any = [];
  user: any;
  total: any = 0;
  products: Product[] = [
    {
      id: 4,
      title: 'Tata Sampann Moong Dal Split, 10kg',
      description: 'An important part of the Indian diet, Moong Dal is a good and filling option for those who want to shed kilos. It is extremely light and easy to digest since it has minimal calories but is packed with protein.',
      picture: '/assets/others/pulses/moong.jpg',
      price: 642,
      sale: 512,
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
      id: 1,
      title: 'Coconut Board, 5Pc',
      description: '<ul><li>It can be a promising material due to its beautiful grain and attractive natural appearance. </li><li> It has potential for the manufacture of high value and export-quality finished products. </li><li>However, like many other conventional wood species untreated freshly-cut lumber can be easily attacked by mould and staining fungi especially if the material is not properly stacked and is exposed to humid environment during the air drying process.</li><li>Further degradation during air drying can also be caused by decay fungi and pinhole borers.</li><li>Hence, prophylactic treatment is necessary if it is used for the production of high value products for export.</li></ul>',
      picture: '/assets/others/coconut.jpg',
      price: 260,
      sale: 180,
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
    }, {
      id: 2,
      title: 'Basmati Rice, 5Kg',
      description: 'Basmati (pronounced IPA: [baːsmət̪iː] in the Indian subcontinent) is a variety of long, slender-grained aromatic rice which is traditionally from the Indian subcontinent.[1] As of 2014, India exported 65% of the overseas basmati rice market, while Pakistan accounted for the remainder, according to the Indian state-run Agricultural and Processed Food Products Export Development Authority.[2] However, many countries use domestically grown basmati rice crops',
      picture: '/assets/others/rice.jpeg',
      price: 354,
      sale: 282,
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
    }, {
      id: 3,
      title: 'Grains, 1Kg',
      description: 'The two main types of commercial grain crops are cereals and legumes. After being harvested, dry grains are more durable than other staple foods, such as starchy fruits (plantains, breadfruit, etc.) and tubers (sweet potatoes, cassava, and more).',
      picture: '/assets/others/grains.jpeg',
      price: 74,
      sale: 52,
      photos: [
        {
          thumb: '/assets/others/grains.jpeg',
          full: '/assets/others/grains.jpeg',
          description: 'Jacket',
        },
      ],
    }, {
      id: 5,
      title: 'Mango, 1Kg',
      description: 'Mangoes are juicy stone fruit from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. The majority of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae.',
      picture: '/assets/fruits/mango.jpg',
      price: 120,
      sale: 88,
      photos: [
        {
          thumb: '/assets/fruits/mango.jpg',
          full: '/assets/fruits/mango.jpg',
          description: 'Mango',
        },
      ],
    }, {
      id: 6,
      title: 'Banana, 500gm',
      description: 'A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas',
      picture: '/assets/fruits/BANANA.jpg',
      price: 24,
      sale: 16,
      photos: [
        {
          thumb: '/assets/fruits/BANANA.jpg',
          full: '/assets/fruits/BANANA.jpg',
          description: 'BANANA',
        },
      ],
    }, {
      id: 7,
      title: 'Langra Mango, 250gm',
      description: 'Langra mango, also known as Banarasi Langra, is a mango cultivar primarily grown in Banaras, Northern India, Bangladesh and Pakistan.',
      picture: '/assets/fruits/langra-mango.jpg',
      price: 24,
      sale: 22,
      photos: [
        {
          thumb: '/assets/fruits/langra-mango.jpg',
          full: '/assets/fruits/langra-mango.jpg',
          description: 'langra-mango',
        },
      ],
    }
    , {
      id: 8,
      title: 'Pomegranate, 1kg',
      description: 'The pomegranate is a fruit-bearing deciduous shrub in the family Lythraceae that grows between 5 and 10 m tall. The fruit is typically in season in the Northern Hemisphere from September to February, and in the Southern Hemisphere from March ',
      picture: '/assets/fruits/Pomegranate.jpg',
      price: 24,
      sale: 22,
      photos: [
        {
          thumb: '/assets/fruits/Pomegranate.jpg',
          full: '/assets/fruits/Pomegranate.jpg',
          description: 'Pomegranate',
        },
      ],
    }
    , {
      id: 9,
      title: 'Tomato, 1kg',
      description: 'The tomato (Solanum lycopersicum) is a fruit from the nightshade family native to South America. Despite botanically being a fruit, its generally eaten and prepared like a vegetable.',
      picture: '/assets/Vegitables/TOMATO.jpg',
      price: 20,
      sale: 13,
      photos: [
        {
          thumb: '/assets/Vegitables/TOMATO.jpg',
          full: '/assets/Vegitables/TOMATO.jpg',
          description: 'TOMATO',
        },
      ],
    }, {
      id: 10,
      title: 'Onion, 1kg',
      description: 'he onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. Its close relatives include the garlic, shallot, leek, chive,',
      picture: '/assets/Vegitables/onion.jpg',
      price: 32,
      sale: 28,
      photos: [
        {
          thumb: '/assets/Vegitables/onion.jpg',
          full: '/assets/Vegitables/onion.jpg',
          description: 'onion',
        },
      ],
    }, {
      id: 11,
      title: 'Potato, 500gm',
      description: 'The potato is a starchy, tuberous crop from the perennial nightshade Solanum tuberosum. In many contexts, potato refers to the edible tuber, but it can also refer to the plant itself. Common or slang terms include tater, tattie and spud.',
      picture: '/assets/Vegitables/potato.jpg',
      price: 16,
      sale: 8,
      photos: [
        {
          thumb: '/assets/Vegitables/potato.jpg',
          full: '/assets/Vegitables/potato.jpg',
          description: 'potato',
        },
      ],
    }
  ];
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

  showAlert(option) {
    this.showAlertHandler.next(option);
  }
}
