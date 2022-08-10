import { PriceStockService } from './price-stock/price-stock.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceStockComponent } from './price-stock/price-stock.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StockListService } from './stocks-list/stock-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PriceStockComponent,
    StocksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [PriceStockService,
              StockListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
