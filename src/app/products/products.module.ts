import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { CardComponent } from './card/card.component';
import { FiltersComponent } from './filters/filters.component';
import { ListPageComponent } from './list-page/list-page.component';

import {UploaderModule} from 'angular-upload-files'; 
import { ProductsRoutingModule } from './products-routing.module';
import { SortComponent } from './sort/sort.component';
import { ViewPageComponent } from './view-page/view-page.component';
import{UploadComponent} from './upload/upload.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    UiModule,
    UploaderModule.forRoot()
  ],
  declarations: [
    ListPageComponent,
    ViewPageComponent,
    FiltersComponent,
    UploadComponent,
    SortComponent,
    CardComponent,
  ],
})
export class ProductsModule {
}
