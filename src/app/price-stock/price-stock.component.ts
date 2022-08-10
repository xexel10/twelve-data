import { PriceStockService } from './price-stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-stock',
  templateUrl: './price-stock.component.html',
  styleUrls: ['./price-stock.component.css']
})
export class PriceStockComponent implements OnInit {

      //aqui se delcara as variáveis
      price:any;

      //pode se declaras as funções aqui tb
     
    
      constructor(private _priceStockService: PriceStockService) {}
    
      getPrice(stock: any){
    
        this.price = this._priceStockService.getPrice(stock).subscribe(data => {
          console.log(data);
          this.price=data.price;
        });
      }

  ngOnInit(): void {
  }

}
