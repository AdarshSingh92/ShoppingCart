import { Component,OnInit  } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Product } from '../interface/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
  productList:Product[]=[];
    constructor(private httpService:HttpService) { }
ngOnInit(){
    debugger;
    this.httpService.getData<any>('https://dummyjson.com/products').subscribe((data)=> {
    this.productList = data.products;   
  });
}
 
}
