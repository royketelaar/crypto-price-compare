import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PriceComparatorComponent } from './components/price-comparator/price-comparator.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, PriceComparatorComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
