import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from '../services/exchangeservice.service';

@Component({
  selector: 'app-currency',
  standalone: false,

  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit {

  exchangeRates: any;
  currencyCode: string[] = [];
  amount: any;
  fromCode: string = '';
  toCode: string = '';
  result: number = 0;

  constructor(private service: ExchangeserviceService) {

  }

  ngOnInit(): void {
    this.service.getExchangeRates().then((response) => response.json()).then((data) => {
      this.exchangeRates = data.conversion_rates;
      for (let code in this.exchangeRates) {
        this.currencyCode.push(code);
      }
    });
  }

  getResult() {

    let fromCodeRate = this.exchangeRates[this.fromCode];
    let toCodeRate = this.exchangeRates[this.toCode];
    this.result = (this.amount / fromCodeRate) * toCodeRate;

  }
}
