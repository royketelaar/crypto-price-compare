import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PriceComparatorComponent } from './components/price-comparator/price-comparator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PriceComparatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
