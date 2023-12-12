import { Component } from '@angular/core';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = {UserName :'', Password:''};
    constructor(private authService:AuthService,private router:Router ) {   
    
  }
  login(){
    this.authService.login(this.user.UserName,this.user.Password).subscribe(response =>{
      if(response){
        localStorage.setItem('logintoken',response.token);     
        this.router.navigate(['/productlist']);
      }
    });
  }
}
