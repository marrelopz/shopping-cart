import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../products.service';
import { InitialCartService } from '../initial-cart.service';
import { Carts, Products } from '../products.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {

  pageNum = 0;
  totalPages = 0;
  recordSize = 5;
  catalog: {}[] = [];
  productList: Products[] = [];
  cartList: Carts[] =  [];
  list: any[] | undefined;


  constructor(private prodService: ProductsService, private cartService: InitialCartService) { }

  ngOnInit(): void {
    this.loadData();
  }

  productTrackby(index: any, catalog: Products) {
    return catalog.id;
  }


  onLeft() {
    if((this.pageNum + 1) != 1)
    {
      this.pageNum--;
      //this.list.length = 0;
      this.pagination();
    }
  }


  onRight() {
    if((this.pageNum + 1) != this.totalPages)
    {
      this.pageNum++;
      //this.list.length = 0;
      this.pagination();
    }
  }

  loadData() {
    this.prodService.getProducts().subscribe({
      next: (res) => {
        this.catalog = res;
        this.totalPages = Math.ceil(res.length/this.recordSize);
      },
      error: (e) => console.log(e.error.message)
    })

    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cartList = res;
        console.log(this.cartList);
      },
      error: (e) => console.log(e.error.message)
    })

    this.pagination();
  }

  pagination() {
    let indexEnd = this.pageNum * this.recordSize;
    let final = indexEnd + this.recordSize;
    this.productList = [];
    for(indexEnd; indexEnd < final; indexEnd++)
    {
      this.productList.push(this.catalog[indexEnd]);
    }

    console.log(this.productList);
  }

  addProduct(item: Products) {
    let newProd : Carts = new Carts();
    var flag = false;

    this.cartList.forEach(element => {
      if(element.id === item.id)
      {
        element.amount = element.amount ? (element.amount + 1) : 1;
        flag = true;
      }
    });

    if(flag === false)
    {
      newProd.id = item.id;
      newProd.description = item.description;
      newProd.name = item.name;
      newProd.price = item.price;
      newProd.amount = 1;
      this.cartList.push(newProd);
      
    }
    this.cartList = [...this.cartList];
    console.log(this.cartList);
    
  }

  showCart(){
    var element = document.getElementById('cart');
    if(element?.classList.contains('not-visible'))
    {
      element.classList.remove('not-visible');
    }
    else if(element?.classList) {
      element.classList.add('not-visible');
    }
  }
  
}
