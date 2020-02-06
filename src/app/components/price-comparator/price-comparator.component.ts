import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-price-comparator',
  templateUrl: './price-comparator.component.html',
  styleUrls: ['./price-comparator.component.css']
})
export class PriceComparatorComponent implements OnInit {

  public buy_prices = [];

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this._dataService.getBuyPrices()
      .subscribe(data => this.buy_prices = data);
  }

}