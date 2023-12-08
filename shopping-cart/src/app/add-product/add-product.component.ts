import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product:Product; 
  constructor( private http:HttpService ) {
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
  textboxes:{value:string}[] = [];
onSubmit() {
  console.log(this.product);
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

addTextBox(){
 this.textboxes.push({value:''});
}
removeTextBox(index:number){
  this.textboxes.splice(index,1);
}

}
