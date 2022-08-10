import { Component, OnInit } from '@angular/core';
import { StockListService } from './stock-list.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stockList:any;

  constructor(private _stockListService: StockListService) {}

  getStocks(){

      this._stockListService.getStocks().subscribe(data => {
      console.log(data.data);
      this.stockList = data;

    });
  }

    ngOnInit() {
      this.getStocks();
    }
  }