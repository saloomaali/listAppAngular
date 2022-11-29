import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsPublicComponent } from './us-public/us-public.component';

const myRouter:Routes = [
  {
    path:"",
    component:PassengerComponent

  },
  {
    path:"us",
    component:UsPublicComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsPublicComponent
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
