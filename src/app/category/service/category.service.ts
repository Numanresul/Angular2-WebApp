import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; //Adım 2
import { Observable } from 'rxjs';
import { map,catchError, tap } from "rxjs/operators";
import {Category} from '../category';
@Injectable()
export class CategoryService {
  constructor(
    private http:HttpClient, // Adım 1
    @Inject("apiUrl") private apiUrl:string  // Adım 2
  ) { }
  
  getCategories():Observable<Category> // Adım 3
  {
    return this.http.get<Category>(this.apiUrl+"/categories");   
  }
}