import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/authguard';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent, canActivate:[AuthGuard]},

  {path:'dashboard',
  component:DashboardComponent, 
  canActivate:[AuthGuard],
  children:[
    {path:'productlist',component:ProductListComponent,canActivate:[AuthGuard]},
    {path:'addproduct',component:AddProductComponent, canActivate:[AuthGuard]},
    {path:'addproduct/:id/:panelmode',component:AddProductComponent, canActivate:[AuthGuard]},
    {path:'product-details/:id',component:ProductDetailsComponent,canActivate:[AuthGuard]}
  ]},
  
  
  
  // ,
  // {path:'**',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
