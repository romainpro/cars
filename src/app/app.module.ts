import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { ListeCarsComponent } from './liste-cars/liste-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ListeCarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
