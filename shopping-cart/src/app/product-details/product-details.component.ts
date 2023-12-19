import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit {
  productid:number = 1;
  productDetails!: Product;
  userName:string='';
  constructor(private route:ActivatedRoute,private productService:ProductService,
    private sharedService:SharedService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
    this.productid = params['id'];
    this.productDetails = this.productService.getDetails(this.productid); 
    this.sharedService.data$.subscribe(x=>{
      this.userName = x;
    });
  }); 
} 

}

