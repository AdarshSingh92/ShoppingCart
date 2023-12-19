import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loggedInUser:string='';
  private userName = new Subject<any>();
  data$ = this.userName.asObservable(); 

  setUserName(name:string){
    this.userName.next(name);
  }
  
}
