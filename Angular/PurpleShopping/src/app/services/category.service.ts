import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  path= 'https://localhost:44389/api/';

  getCategories(isMain:boolean) : Observable<Category[]>{
    return isMain == null
    ? this.http.get<Category[]>(this.path + 'categories')
    : this.http.get<Category[]>(this.path + 'categories?isMain='+ isMain);
  }
}
