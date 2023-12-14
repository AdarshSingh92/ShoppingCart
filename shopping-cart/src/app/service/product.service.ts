import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpService:HttpService) {   
  }
  getDataFromLocalStorage() :Product[] {
    return JSON.parse(localStorage.getItem('productlist')!);
  }
  setData(product:Product){
    var productList = this.getDataFromLocalStorage();
    productList.push(product)
    localStorage.setItem('productlist', JSON.stringify(productList));
  }
  getAllData(): Observable<any> {     
    return this.httpService.getData<any>('https://dummyjson.com/products'); 
  }

  getDetails(id:number | null):Product{
    var productList = this.getDataFromLocalStorage();  
    return productList.filter(x=> x.id == id)[0];
  }

  updateDetails(product:Product){
    var productlist = this.getDataFromLocalStorage();
    productlist.forEach(item => {
      if(item.id === product.id){
        item = product;       
      }     
    })
    localStorage.setItem('productlist',JSON.stringify(productlist));
  }
}
