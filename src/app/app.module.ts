import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProductMenuComponent } from './components/pages/product-menu/product-menu.component';
import { OrderProductComponent } from './components/pages/order-product/order-product.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignUpComponent,
    DashboardComponent,
    ProductMenuComponent,
    OrderProductComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
