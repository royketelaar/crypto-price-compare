import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-price-comparator',
  templateUrl: './price-comparator.component.html',
  styleUrls: ['./price-comparator.component.css']
})
export class PriceComparatorComponent implements OnInit {

  prices : any;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() { 
    let resp = this.http.get('https://bestebitcoindeal.nl/api/btc/providers?amount=1&type=buy&currency=btc');
    resp.subscribe((data) => this.prices = data)
  }

}