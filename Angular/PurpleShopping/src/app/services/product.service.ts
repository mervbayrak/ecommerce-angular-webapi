import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  path= 'https://localhost:44389/api/';

  getProduct() : Observable<Product[]>{
    return this.http.get<Product[]>(this.path + 'products');
  }
}

