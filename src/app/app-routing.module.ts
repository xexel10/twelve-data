import { StocksListComponent } from './stocks-list/stocks-list.component';
import { PriceStockComponent } from './price-stock/price-stock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PriceStockComponent},
  {path: 'list', component: StocksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
