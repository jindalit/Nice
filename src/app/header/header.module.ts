import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  KitIconsModule,
  KitOutsideClickModule,
  KitOverlayModule,
  KitPositionModule,
  KitSlideModule,
} from '@ngx-kit/core';
import { UiModule } from '../ui/ui.module';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    KitIconsModule,
    KitOverlayModule,
    KitSlideModule,
    KitOutsideClickModule,
    KitPositionModule,
    UiModule,
  ],
  declarations: [
    MainHeaderComponent,
  ],
  exports: [
    MainHeaderComponent,
  ],
})
export class HeaderModule {
}
