import { Component, Input } from '@angular/core';
import { Product } from '../../data/meta';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: Product;
  constructor(private data: DataService) {
  }
}
