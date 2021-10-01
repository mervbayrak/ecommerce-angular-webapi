import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { SettingsModel } from "../models/settings.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public data: SettingsModel;

  constructor(private http: Http) {}

  load(): Promise<SettingsModel> {
    var promise = this.http
      .get("/assets/urlSettings.json")
      .map(res => res.json())
      .toPromise();
    promise.then(setting => (this.data = <SettingsModel>setting));
    return promise;
  }
}
