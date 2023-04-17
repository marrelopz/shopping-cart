import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import * as productData from './products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data = productData;

  constructor(private http: HttpClient) { }

  getProducts(): Observable <any> {
    return of(this.data.products)
  }

}
