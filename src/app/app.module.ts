import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataService } from './data/data.service';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SupportModule } from './support/support.module';
import { UiModule } from './ui/ui.module';
import { AlertComponent } from './ui/alert.component';
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    UiModule,
    HeaderModule,
    FooterModule,
    SupportModule
  ],
  declarations: [
    AppComponent,AlertComponent
  ],
  providers: [
    DataService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
