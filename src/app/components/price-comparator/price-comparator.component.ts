import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-price-comparator',
  templateUrl: './price-comparator.component.html',
  styleUrls: ['./price-comparator.component.css']
})
export class PriceComparatorComponent implements OnInit {
  interval: any;
  
  bitonic_buy_price: any;
  bitonic_sell_price: any;

  litebit_buy_price: any;
  litebit_sell_price: any;

  bitvavo_buy_price: any;




  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() { 
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000)
  }

  refreshData(){
    let bitonic_buy_price = this.http.get('https://bitonic.nl/api/buy');
    let bitonic_sell_price = this.http.get('https://bitonic.nl/api/sell');

    bitonic_buy_price.subscribe((data) => 
      this.bitonic_buy_price = data.eur
    )

    bitonic_sell_price.subscribe((data) => 
      this.bitonic_sell_price = data.eur
    )

    let litebit_price = this.http.get('https://api.litebit.eu/market/btc');

    litebit_price.subscribe((data) => {
        this.litebit_buy_price = data.result.buy,
        this.litebit_sell_price = data.result.sell
      }
    )

    let bitvavo_buy_price = this.http.get('https://api.bitvavo.com/v2/ticker/price');
    bitvavo_buy_price.subscribe((data) => 
      // Dit moet naar mijn idee correcter, weet alleen niet goed hoe ik object benader zoekend naar de eerste key-value "market" : "BTC-EUR"
      this.bitvavo_buy_price = data[16].price // nu haalt ie gewoon 17e object op in de data array
    )
  }
}
