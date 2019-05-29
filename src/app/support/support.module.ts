import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupportComponent } from './support.component';

import { SupportRoutingModule } from './support-routing.module';
@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule
  ],
  declarations: [
    SupportComponent,
  ],
  exports: [
    SupportComponent,
  ],
})
export class SupportModule {
}
