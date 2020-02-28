import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { filter } from 'rxjs/operators';
import { PriceData } from '../../interfaces/price-data';

@Component({
  selector: 'app-price-comparator',
  templateUrl: './price-comparator.component.html',
  styleUrls: ['./price-comparator.component.css']
})
export class PriceComparatorComponent implements OnInit {
  interval: any;
  buy_data: PriceData[] = []
  sell_data: PriceData[] = []

  bitonic_buy_price: any;
  bitonic_sell_price: any;

  litebit_buy_price: any;
  litebit_sell_price: any;

  coindeal_buy_price: any;
  coindeal_sell_price: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() { 
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000)
  }

  refreshData() {
    this.buy_data = []
    this.sell_data = []

    this.http.get('https://bitonic.nl/api/buy').subscribe((data) =>  {
      // this.bitonic_buy_price = data.eur
      this.buy_data.push({ broker: 'bitonic', price: data.eur })
    })



    this.http.get('https://bitonic.nl/api/sell').subscribe((data) => 
      this.bitonic_sell_price = data.eur
    )

    this.http.get('https://api.litebit.eu/market/btc').subscribe((data) => {
        this.litebit_buy_price = data.result.buy,
        this.litebit_sell_price = data.result.sell
      }
    )
    // this.http.get('https://api.bitvavo.com/v2/ticker/price').subscribe((data) => {
    //     const correct_object = data.filter(item => item.market == 'BTC-EUR')
    //     this.bitvavo_buy_price = correct_object[0].price
    //   }
    // )

    console.log(this.buy_data)

  }
}
