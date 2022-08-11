import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StockListService } from './stock-list.service';

import { Stocks } from './../interfaces/Stocks';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stockList: Stocks[] = [];

  constructor(private _stockListService: StockListService) {}

  getStocks(){

      this._stockListService.getStocks().subscribe(data => {
        console.log(data.data[0]);
        this.stockList =  data.data;
        console.log('Status',data.status

      });
  }

    ngOnInit() {
      this.getStocks();
    }
  }
