import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


export class SubscriptionApi{

    constructor(private httpClient:HttpClient){}

    newSubscription(email:string):Observable<any>{
      return this.httpClient.post("https://example.com/api/subscribe",{email: email});
    }
}
