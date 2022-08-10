import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class StockListService {

  price: any;
  url: string = 'https://twelve-data1.p.rapidapi.com/stocks';

  getStocks(): Observable<any> {
    // API Call
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
      'x-rapidapi-key': 'bq87sDo3F5mshA1Zujo7kOGz4Mvip1Fc09ejsnPozx8YaWXBj7'
    });

    let params = new HttpParams().set('exchange', 'NASDAQ')
                                 .set('format', 'json');

    return this.http
                .get<any>(this.url, {
    headers: headers,
    params: params
    });
  }

// Implementing OnInit
  constructor(private http: HttpClient) {}

}
