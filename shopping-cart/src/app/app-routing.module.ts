import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/authguard';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'productlist', component:ProductListComponent,canActivate:[AuthGuard]},
  {path:'productdetails/:id', component:ProductDetailsComponent, canActivate:[AuthGuard]},
  {path:'addproduct',component:AddProductComponent, canActivate:[AuthGuard]},
  {path:'addproduct/:id/:panelmode',component:AddProductComponent, canActivate:[AuthGuard]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
