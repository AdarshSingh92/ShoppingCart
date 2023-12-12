import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit {
  productid:number = 1;
  productDetails!: Product;
  constructor(private route:ActivatedRoute,private productService:ProductService) {

  }

  ngOnInit(): void {
    debugger;
    this.route.params.subscribe(params=>{
    this.productid = params['id'];  
    this.productDetails = this.productService.getDetails(this.productid); 
  });
 
} 

}

