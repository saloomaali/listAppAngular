import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';


const myRouter:Routes = [
  {
    path:"",
    component:PassengerComponent

  },
  {
    path:"us",
    component:UsPublicComponent
  },
  {
    path:"info",
    component:UserInfoComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"user",
    component:UserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsPublicComponent,
    UserInfoComponent,
    ProductComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
