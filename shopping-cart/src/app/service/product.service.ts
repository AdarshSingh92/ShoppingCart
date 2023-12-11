import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static productList:Product[] = [];
  constructor(private httpService:HttpService) { 
   
  }

  setData(product:Product){
    ProductService.productList.push(product);
  }
  getAllData(): Observable<any> {     
    return this.httpService.getData<any>('https://dummyjson.com/products'); 
  }

  getDetails(id:number | null):Product{
    debugger;
    return ProductService.productList.filter(x=> x.id == id)[0];
  }

  updateDetails(product:Product){
    ProductService.productList.forEach(item => {
      if(item.id === product.id){
        item = product;       
      }     
    })   
  }
}
