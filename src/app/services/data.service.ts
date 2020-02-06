import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable()
export class DataService {

  private _buy_url: string = "https://bestebitcoindeal.nl/api/btc/providers?amount=1&type=buy&currency=btc"

  constructor(
    private http: HttpClient
  ) { }

  getBuyPrices() {
    return this.http.get(this._buy_url)
  }

}