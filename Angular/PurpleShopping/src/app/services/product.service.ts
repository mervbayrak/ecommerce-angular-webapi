import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCaller } from '../common/http-caller';
import { Product } from '../models/Product';
import { SettingsService } from './settings.service';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpCaller: HttpCaller,
    private settingsService: SettingsService) { }


  getProduct(categoryId: any): Observable<Product[]> {
    let newPath = this.settingsService.data.products;
    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }
    return this.httpCaller
      .get(
        this.settingsService.data.products,
        null,
        true,
        'There was an error while getting your data'
      )
      .map((response: Response) => {
        return response as any;
      });
  }
}
