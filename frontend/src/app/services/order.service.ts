import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { HttpClient } from '@angular/common/http';
import { ORDER_CREATE_URL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(ordering:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, ordering);
  }
}
