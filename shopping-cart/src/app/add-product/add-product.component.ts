import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { HttpService } from '../service/http.service';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit,AfterViewInit {
  product:Product; 
  productForm!:FormGroup;
  controlCount:number = 1;
  panelMode:string='submit'; //there will be two mode in panel add or
  //edit if value found than edit otherwise add - default is add
  productID:number | null = null;
  constructor(private http:HttpService,private route:ActivatedRoute,private productService:ProductService,
    private formBuilder:FormBuilder ) {
      console.log('constructor calling');
   this.product = {
    price:null,
    brand :'',
    category:'',
    description:'',
    id:null,
    images:[],
    rating:null,
    stock:null,
    thumbnail:'',
    title:'',
    discountPercentage:null
   }
   
  }
  
  fillFormControlls(){
    this.productForm = new FormGroup({
      title: new FormControl(this.product.title,[Validators.required,Validators.maxLength(250)]),
      price: new FormControl(this.product.price,[Validators.required,Validators.maxLength(10),
      Validators.pattern('^[0-9,.]*$')]),
      stock: new FormControl(this.product.stock,[Validators.required,Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')]),
      rating:new FormControl(this.product.rating,[Validators.required,Validators.maxLength(10),
        Validators.pattern('^[0-9,.]*$')]),
      brand: new FormControl(this.product.brand,[Validators.required,Validators.maxLength(250)]),
      category: new FormControl(this.product.category,[Validators.required,Validators.maxLength(250)]),
      description: new FormControl(this.product.description,[Validators.required,Validators.maxLength(250)]),
      thumbnail: new FormControl(this.product.thumbnail,[Validators.required,Validators.maxLength(250)])        
     });
     this.product.images.forEach((value, index)=>{
      this.productForm.addControl('image'+(index+1), new FormControl(value,[Validators.required,Validators.maxLength(250)]));
      this.controlCount = this.controlCount + 1;
     });
    
  }

  getPanelMode(){
    this.route.params.subscribe(params=> {
      if(params['id'])
      this.productID = params['id'];
      if(params['panelmode'])
      this.panelMode = params['panelmode']
    });
  }

  fillProductIfEditPanel(){
    if(this.panelMode === 'edit')
    {
      this.product = this.productService.getDetails(this.productID);    
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit calling');   
    this.getPanelMode();
    this.fillProductIfEditPanel();
    this.fillFormControlls();
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit calling');
  }

onSubmit() {
  if(this.productForm.valid){
 
    this.mapFormControlToInterface(this.productForm.value);
     
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
mapFormControlToInterface(value: any) { 
  this.product.title = value['title'];
  this.product.brand = value['brand']
  this.product.category = value['category'];
  this.product.description = value['description'];
  //this.product.discountPercentage = value['discountPercentage'];
  this.product.price = value['price'];
  this.product.rating = value['rating'];
  this.product.stock = value['stock'];
  this.product.thumbnail = value['thumbnail'];

  Object.keys(value).forEach(key=>{      
    if(key.includes('image')){
      this.product.images.push(value[key])
    }
  });
  
}

addTextBox(){  
  if(this.productForm.controls['image'+1])
  {   
    this.controlCount= this.controlCount + 1;  
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