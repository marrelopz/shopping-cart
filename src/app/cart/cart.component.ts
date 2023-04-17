import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ProductsService } from '../products.service';
import { Carts } from '../products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {

  
  pageNum = 0;
  totalPages = 0;
  recordSize = 5;
  catalog: {}[] = [];
  productList: Carts[] = [];
  list: any[] | undefined;

  @Input() data: Carts[] = [];



  constructor(private prodService: ProductsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges');
  }


  ngOnInit(): void {
  }

  productTrackby(index: any, cart: Carts) {
    return cart.id;
  }





}
