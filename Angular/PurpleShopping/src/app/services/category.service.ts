import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCaller } from '../common/http-caller';
import { Category } from '../models/Category';
import { SettingsService } from './settings.service';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpCaller: HttpCaller,
    private settingsService: SettingsService) { }

  getCategories(isMain: boolean): Observable<Category[]> {
    return isMain == null
      ? this.httpCaller
        .get(
          this.settingsService.data.categories,
          null,
          true,
          'There was an error while getting your data'
        )
        .map((response: Response) => {
          let result = response as any;
          return response as any;
        })
      : this.httpCaller
        .get(
          this.settingsService.data.categories + "?isMain=" + isMain,
          null,
          true,
          'There was an error while getting your data'
        )
        .map((response: Response) => {
          return response as any;
        });
  }
}
