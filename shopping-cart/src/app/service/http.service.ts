import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getData<T>(url:string):Observable<T>{
   return this.http.get<T>(url);
  }
  postData(url:string,body:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(url, JSON.stringify(body), {headers});
  }
}
