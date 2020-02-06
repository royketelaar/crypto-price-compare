import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Price } from '../interfaces/price'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DataService {

  private _buy_url: string = "https://bestebitcoindeal.nl/api/btc/providers?amount=1&type=buy&currency=btc"

  constructor(
    private http: HttpClient
  ) { }

  getBuyPrices(): Observable<Price{}> {
    return this.http.get<Price{}>(this._buy_url)
  }

}