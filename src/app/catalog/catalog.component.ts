import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  pageNum = 0;
  totalPages = 2;


  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
  }

  onLeft() {
    if((this.pageNum + 1) != 1)
    {
      this.pageNum--;
      //this.list.length = 0;
      this.loadData();
    }
  }

  onRight() {
    if((this.pageNum + 1) != this.totalPages)
    {
      this.pageNum++;
      //this.list.length = 0;
      this.loadData();
    }
  }

  loadData() {
    this.prodService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e.error.message)
    })
  }

}
