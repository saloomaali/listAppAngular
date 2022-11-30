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
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component'

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
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quote",
    component:QuotesComponent
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
    NavbarComponent,
    TodoComponent,
    QuotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
