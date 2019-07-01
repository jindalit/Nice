import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import{UploadComponent} from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
  {
    path: ':category/:id',
    component: ViewPageComponent,
  },
  {
    path: ':id/upload',
    component: UploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
