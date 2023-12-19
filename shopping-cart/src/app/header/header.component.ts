import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

userName:string='';
  constructor(private authService:AuthService, private router:Router) {  
   
  }
  
  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
