import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-comparator',
  templateUrl: './price-comparator.component.html',
  styleUrls: ['./price-comparator.component.css']
})
export class PriceComparatorComponent implements OnInit {

  public buy_prices = [];

  constructor(
  ) { }

  ngOnInit() { }

}