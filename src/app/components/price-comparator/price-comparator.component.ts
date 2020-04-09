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
  price_data: PriceData[]

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() { 
    this.refreshData();
  }

  refreshData() {
    this.price_data = []

    // // Sistemkoin
    // this.http.get('https://api.sistemkoin.com/ticker').subscribe((data) => {
    //   this.buy_data.push({ broker: 'Sistemkoin', price: parseFloat(data.USD.DOGE.askPrice).toFixed(8) })
    //   this.sell_data.push({ broker: 'Sistemkoin', price: parseFloat(data.USD.DOGE.bidPrice).toFixed(8) })
    //   this.total_apis++
    //   this.sortData() 
    // })

    // // Alterdice
    // this.http.get('https://api.alterdice.com/v1/public/ticker?pair=DOGEUSD').subscribe((data) => {
    //   this.buy_data.push({ broker: 'Alterdice', price: parseFloat(data.data.high).toFixed(8) })
    //   this.sell_data.push({ broker: 'Alterdice', price: parseFloat(data.data.low).toFixed(8) })
    //   this.total_apis++
    //   this.sortData() 

    // })

    // // Exmo
    // this.http.get('https://api.exmo.com/v1/ticker/').subscribe((data) => {
    //   this.buy_data.push({ broker: 'Exmo', price: parseFloat(data.DOGE_USD.buy_price).toFixed(8) })
    //   this.sell_data.push({ broker: 'Exmo', price: parseFloat(data.DOGE_USD.sell_price).toFixed(8) })
    //   this.total_apis++
    //   this.sortData() 
    // })

    // // SouthXChange
    // this.http.get('https://www.southxchange.com/api/prices').subscribe((data) => {
    //   const correct_object = data.filter(item => item.Market == 'DOGE/USD')
    //   const buy_price = correct_object[0].Ask
    //   const sell_price = correct_object[0].Bid

    //   this.buy_data.push({ broker: 'SouthXChange', price: parseFloat(buy_price).toFixed(8) })
    //   this.sell_data.push({ broker: 'SouthXChange', price: parseFloat(sell_price).toFixed(8) })
    //   this.total_apis++
    //   this.sortData() 
    // })

    this.http.get('https://api.coinranking.com/v1/public/markets').subscribe((result) => {
      const btc_usdt_pairs = result.data.markets.filter(pair => (pair.baseSymbol === "BTC" && pair.quoteSymbol === "USDT"))
      
      for (let pair of btc_usdt_pairs) {
            this.price_data.push({
              broker: pair.quoteSymbol,
              buy_price: pair.price,
              sell_price: pair.tickerClose
            })
      }
    }) 
    console.log(this.price_data)
  }
  sortData() {
    // Checkt of buy_data en sell_data gelijk is aan totaal opgehaalde API's
    // if (this.buy_data.length && this.sell_data.length === this.total_apis) {
    //   this.buy_data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    //   this.sell_data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    // }
  }
}
