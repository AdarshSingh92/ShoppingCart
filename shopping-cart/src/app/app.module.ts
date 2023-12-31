import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpService } from './service/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms'
import { ProductService } from './service/product.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { ProductfilterPipe } from './pipes/productfilter.pipe';
import { AuthInterceptor } from './service/authinterceptor';
import { SharedService } from './service/shared.service';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SubmenuComponent } from './submenu/submenu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    LoginComponent,
    ProductfilterPipe,
    HeaderComponent,
    LogoutComponent,
    DashboardComponent,
    SubmenuComponent,
    SideMenuComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [HttpService,
     ProductService,
     AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
