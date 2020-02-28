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

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() { 
    this.refreshData();
    // this.interval = setInterval(() => {
    //   this.refreshData();
    // }, 10000)
  }

  refreshData() {
    this.buy_data = []
    this.sell_data = []


    this.http.get('https://bitonic.nl/api/buy').subscribe((data) =>  {
      this.buy_data.push({ broker: 'Bitonic', price: parseFloat(data.eur).toFixed(2) })
    })

    this.http.get('https://bitonic.nl/api/sell').subscribe((data) => 
      this.sell_data.push({ broker: 'Bitonic', price: parseFloat(data.eur).toFixed(2) })
    )

    this.http.get('https://api.litebit.eu/market/btc').subscribe((data) => {        
        this.buy_data.push({ broker: 'Litebit', price: parseFloat(data.result.buy).toFixed(2) })
        this.sell_data.push({ broker: 'Litebit', price: parseFloat(data.result.sell).toFixed(2) })        
      }
    )

    this.buy_data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    this.sell_data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    
    // Data heeft ie op dit moment nog niet ingeladen (waarschijnlijk omdat subscribe call nog niet af is) dus geeft lege array terug
    // Weet je een manier hoe ik kan wachten tot alle data geladen is en dan pas een sortering uitvoeren?
    console.log(this.buy_data)


    // this.http.get('https://api.bitvavo.com/v2/ticker/price').subscribe((data) => {
    //     const correct_object = data.filter(item => item.market == 'BTC-EUR')
    //     this.bitvavo_buy_price = correct_object[0].price
    //   }
    // )
    
  }
}
