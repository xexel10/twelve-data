import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PriceStockService {

  price: any;

  getPrice(stock:string): Observable<any> {
    // API Call
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
      'x-rapidapi-key': 'bq87sDo3F5mshA1Zujo7kOGz4Mvip1Fc09ejsnPozx8YaWXBj7'
    });

    return this.http
               .get<any>('https://twelve-data1.p.rapidapi.com/price?symbol=' + stock +'&format=json&outputsize=30', {
    headers: headers
    });
  }

// Implementing OnInit
  constructor(private http: HttpClient) {}

}
