import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../models/Order';

@Component({
  selector: 'order-items-list',
  templateUrl: './order-items-list.component.html',
  styleUrls: ['./order-items-list.component.css']
})
export class OrderItemsListComponent implements OnInit{

  @Input()
  itemOrder!:Order;
  constructor(){}
  ngOnInit(): void {
  }

}
