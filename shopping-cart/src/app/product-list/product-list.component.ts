import { Component,OnInit  } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';

 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  
})
export class ProductListComponent implements OnInit  {

  productList:Product[] = [];
  searchTerm:string = '';
    constructor(public productService:ProductService) { }
ngOnInit(){
  if(localStorage.getItem('productlist') != null){
  this.productList = JSON.parse(localStorage.getItem('productlist')!);
  }
    if(this.productList == null || this.productList.length == 0){
    this.productService.getAllData().subscribe(response=>
    {    
      this.productList = response.products;  
      localStorage.setItem('productlist',JSON.stringify(this.productList));
      //ProductService.productList = response.products;
    });
  }
 
  } 
}
