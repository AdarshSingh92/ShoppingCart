import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'', redirectTo:'/productlist',pathMatch:'full'},
  {path:'productlist', component:ProductListComponent},
  {path:'productdetails/:id', component:ProductDetailsComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'addproduct/:id/:panelmode',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
