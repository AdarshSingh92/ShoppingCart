import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { HttpService } from '../service/http.service';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product; 
  panelMode:string='submit'; //there will be two mode in panel add or
  //edit if value found than edit otherwise add - default is add
  productID:number | null = null;

  constructor(private http:HttpService,private route:ActivatedRoute,private productService:ProductService ) {
   this.product = {
    price:null,
    brand :'',
    category:'',
    description:'',
    id:null,
    images:[''],
    rating:null,
    stock:null,
    thumbnail:'',
    title:'',
    discountPercentage:null
   }    
  }
ngOnInit(): void {
  console.log(this.panelMode);
  this.route.params.subscribe(params=> {
    if(params['id'])
    this.productID = params['id'];
    if(params['panelmode'])
    this.panelMode = params['panelmode']
  });

  if(this.panelMode === 'edit')
  {
    this.product = this.productService.getDetails(this.productID);
  }
}

onSubmit() {
  console.log(this.product);
  if(this.panelMode === 'submit')
  {
    this.productService.setData(this.product);  
    this.http.postData("https://dummyjson.com/products/add",this.product).subscribe(
      response=>{
      if(response)
      {     
        console.log(response);
        alert('New Product Saved Successfully with ID:'+ response.id);
      }    
    },
    error=>{
      alert('Something went wrong');
    });  
  }
  else if (this.panelMode ==='edit')
  {    
    this.productService.updateDetails(this.product);  
    alert("Product "+this.product.title+" Updated successfully");
  }
}

addTextBox(){
 this.product.images.push('');
}
removeTextBox(index:number){
  this.product.images.splice(index,1);
}

}
