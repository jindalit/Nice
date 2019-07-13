import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
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
import { Http, HttpModule } from '@angular/http';
export function jwtOptionsFactory(tokenService) {
  return {
    tokenGetter: () => {
      return localStorage.getItem('JSESSIONID');
    }
  }
}
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
    SupportModule,
    HttpModule
  ],
  declarations: [
    AppComponent, AlertComponent
  ],
  providers: [
    { provide: JWT_OPTIONS, useFactory: jwtOptionsFactory, deps: [Http] }, DataService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
