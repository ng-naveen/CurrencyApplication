import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeserviceService {

  constructor() { }

  getExchangeRates() {

    return fetch('https://v6.exchangerate-api.com/v6/c17d6b1ac1c02f18a9645e432353457/latest/USD');

  }

}
