import { Injectable } from "@angular/core";
import {HttpRequest,HttpInterceptor,HttpHandler,HttpEvent} from "@angular/common/http"
import { Observable } from "rxjs";
import {AuthService } from "./auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    /**
     *
     */
    constructor(private authService:AuthService) {
       
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        //Check if the request URL is for the login API
        if(req.url.includes('/login')){
            // If it's a login request, skip interception and pass the request as is
            return next.handle(req);
        }
        //getting token from auth service
        const authToken = this.authService.getAuthToken();
        //clone http request and set auth header 
     const authReq = req.clone({
        setHeaders:{
            Authorization:'Bearer ${authToken}',
        },
     });
     //pass request to next handler with auth token in request header
     return next.handle(req);
    }    
} 