import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import * as cartData from './initialCart.json'


@Injectable({
  providedIn: 'root'
})
export class InitialCartService {

  data = cartData;

  constructor(private http: HttpClient) { }

  getCart(): Observable <any> {

    return of(this.data.products)
  }
}
