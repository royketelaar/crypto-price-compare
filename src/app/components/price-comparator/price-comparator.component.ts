import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-price-comparator',
  templateUrl: './price-comparator.component.html',
  styleUrls: ['./price-comparator.component.css']
})
export class PriceComparatorComponent implements OnInit {

  price: any;
  interval: any;

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
    let resp = this.http.get('https://bitonic.nl/api/sell');
    resp.subscribe((data) => this.price = data.eur);
  }
}
