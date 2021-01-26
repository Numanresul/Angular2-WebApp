//import { Injectable } from '@angular/core';
import {Inject, Injectable} from '@angular/core';
import { Product } from '../product'; //Adım 1
import { HttpClient, HttpResponse } from '@angular/common/http'; //Adım 2
import { Observable } from 'rxjs'; //Adım 3
import { map,catchError,tap } from "rxjs/operators"; //Adım 4
@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private http:HttpClient, @Inject('apiUrl') private apiUrl: string) { }// Adım 6
getProduct():Observable<Product>{ //Adım 5
// Adım 7   
// return this.http.get("http://northwindapi.azurewebsites.net/api/products")
//     .pipe(map(Response => Response.json()))
//   }
return this.http.get<Product>(this.apiUrl+"/products");
}
}