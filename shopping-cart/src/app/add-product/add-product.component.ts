import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { HttpService } from '../service/http.service';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product; 
  productForm:FormGroup;
  controlCount:number = 1;
  panelMode:string='submit'; //there will be two mode in panel add or
  //edit if value found than edit otherwise add - default is add
  productID:number | null = null;
  constructor(private http:HttpService,private route:ActivatedRoute,private productService:ProductService,
    private formBuilder:FormBuilder ) {
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
   this.productForm = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.maxLength(250)]),
    price: new FormControl('',[Validators.required,Validators.maxLength(10),
    Validators.pattern('^[0-9,.]*$')]),
    stock: new FormControl('',[Validators.required,Validators.maxLength(10),
      Validators.pattern('^[0-9]*$')]),
    rating:new FormControl('',[Validators.required,Validators.maxLength(10),
      Validators.pattern('^[0-9,.]*$')]),
    brand: new FormControl('',[Validators.required,Validators.maxLength(250)]),
    category: new FormControl('',[Validators.required,Validators.maxLength(250)]),
    description: new FormControl('',[Validators.required,Validators.maxLength(250)]),
    thumbnail: new FormControl('',[Validators.required,Validators.maxLength(250)]),   
    //image:new FormControl('',[Validators.required,Validators.maxLength(250)])
   });
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
  console.log(this.productForm.value);
  debugger;
  if(this.productForm.valid){
 
    this.product = this.productForm.value;
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
}

addTextBox(){
  debugger;
 
  
  if(this.productForm.controls['image'+1])
  {
    // Object.keys(this.productForm.controls).forEach(key=>{
    //   if(key.includes('image'))
    //   { 
        this.controlCount= this.controlCount + 1;
    //   }
    // });    
  }
  else
  {
    this.controlCount = 1;
  }
  this.productForm.addControl('image'+this.controlCount, new FormControl('',[Validators.required,Validators.maxLength(250)]));
}
removeTextBox(){
   this.productForm.removeControl('image'+this.controlCount);
   this.controlCount = this.controlCount - 1;
}

}
