import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpService) { }
    loginURL:string = 'https://dummyjson.com/auth/login';

    login(userName:string,password:string):Observable<any>{   
      return this.httpService.postData(this.loginURL,{username:userName,password:password});
    }
    isLoggedIn():boolean{
      return !! sessionStorage.getItem('loginDetails');
    }

    getAuthToken():string {    
      return JSON.parse(sessionStorage.getItem('loginDetails')!).Token;
    }

    getUserName():string{
      return JSON.parse(sessionStorage.getItem('loginDetails')!).UserName;
    }
    
}
