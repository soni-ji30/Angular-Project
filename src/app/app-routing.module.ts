import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthoGuard } from './authentication/autho.guard';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { OrderProductComponent } from './components/pages/order-product/order-product.component';
import { ProductMenuComponent } from './components/pages/product-menu/product-menu.component';

const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthoGuard],children:[
    {path:'product-menu',component:ProductMenuComponent},
    {path:'order-product',component:OrderProductComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
