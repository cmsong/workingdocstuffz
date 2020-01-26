import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billing } from '../models/Billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createBilling(billing: Billing) :Observable<Billing>{
    return this.http.post<Billing>('http://localhost:8080/billing', billing, {headers: this.headers});
  }

  getBillingById(id: number){
    return this.http.get('http://localhost:8080/billing/' + id);
  }

  getAllBilling(){
    console.log("This bitch works!");
    return this.http.get('http://localhost:8080/billing');
  }

  updateBilling(change: Billing) :Observable<Billing>{
    return this.http.put<Billing>('http://localhost:8080/billing', change, {headers: this.headers});
  }

  deleteBilling(id: number){
    return this.http.delete('http://localhost:8080/billing/' + id);
  }

}