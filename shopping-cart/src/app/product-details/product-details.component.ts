import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit {
  productid:number = 1;
  productDetails!: Product;
  constructor(private route:ActivatedRoute, private router:Router, private httpService:HttpService) {

  }

  ngOnInit(): void {
    debugger;
    this.route.params.subscribe(params=>{
      this.productid = params['id'];
     this.getProductDetails(this.productid);
  })
}

  getProductDetails(productid:Number)  {
    debugger;
   let apiURL:string = "https://dummyjson.com/products/" + this.productid;
   this.httpService.getData<Product>(apiURL).subscribe(response => {
    if(response)
    {
      debugger;
      this.productDetails = response;
      // console.log(this.productDetails);
    }
   });
  }

}

