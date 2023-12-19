import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {UserName :'', Password:''};
    constructor(private authService:AuthService,private router:Router,
      private sharedService:SharedService,private route: ActivatedRoute) {   
        sessionStorage.clear();
        localStorage.clear();
    
  }
  ngOnInit(): void {
    
  }
  login(){
    this.authService.login(this.user.UserName,this.user.Password).subscribe(response =>{
      if(response){
        debugger;
        let userDetails = 
        {
          Token:response.token,
          UserName:response.username
        };
        sessionStorage.setItem('loginDetails', JSON.stringify(userDetails));
        this.router.navigate(['/dashboard/productlist'],{relativeTo:this.route});
       
      }
    });
  }
}
