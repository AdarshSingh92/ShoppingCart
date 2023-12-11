import { Component,OnInit  } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  { 
  productList:Product[] = [];
    constructor(public productService:ProductService) { }
ngOnInit(){
  debugger;
    if(ProductService.productList == null || ProductService.productList.length == 0){
    this.productService.getAllData().subscribe(response=>
    {    
      this.productList = response.products;  
      ProductService.productList = response.products;
    });
  }
  this.productList = ProductService.productList;
  } 
}
