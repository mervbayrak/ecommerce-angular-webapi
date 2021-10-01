import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/finally";
import { Response, RequestOptionsArgs } from "@angular/http";
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../environments/environment";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators/catchError";
import { CustomEncoder } from "./CustomEncoder";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpCaller {
  isLoaderShown: boolean = false;

  baseUrl = environment.apiBaseURL;

  constructor(
    private http: HttpClient,
    private notificationsService: ToastrService
  ) { }
  //send params as shown in below commented code
  //let Params = = new HttpParams().append('firstParameter', "test").append('secondParameter', "test2");


  postImage(
    url: string,
    params?: HttpParams,
    body?: any,
    hasLoading: boolean = true,
    errorMessage: string = "",
    httpHeaders?: HttpHeaders
  ): Observable<Response> {
    if (hasLoading) {
      // this.notificationService.loading('Loading');
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    // if (httpHeaders) {
    //   httpHeaders = new HttpHeaders({

    //   });
    // }
    return this.http
      .post<Response>(this.baseUrl + url, body, { headers: { 'User-Agent': 'image' }, params: params })
      .pipe(catchError(err => this.handleError(err)))
      .finally(() => { });
  }

  post(
    url: string,
    params?: HttpParams,
    body?: any,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<Response> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    return this.http
      .post<Response>(this.baseUrl + url, body, { params: params })
      .pipe(catchError(err => this.handleError(err)))
    // .finally(() => this.hideLoader());
  }

  downloadFile(
    url: string,
    params?: HttpParams,
    body?: any,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<any> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }


    return this.http
      .post<any>(this.baseUrl + url, body, { params: params, observe: 'response', responseType: 'blob' as 'json' })
      .pipe(map((result: HttpResponse<Blob>) => {
        console.log("HERE");
        return result.body;
      }))
    // .finally(() => this.hideLoader());
  }

  put(
    url: string,
    params?: HttpParams,
    body?: any,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<Response> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    return this.http
      .put<Response>(this.baseUrl + url, body, { params: params })
      .pipe(catchError(err => this.handleError(err)))
    // .finally(() => this.hideLoader());
  }

  delete(
    url: string,
    params?: HttpParams,
    body?: any,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<Response> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: body,
      params: params
    };

    return this.http
      .delete<Response>(this.baseUrl + url, httpOptions)
      .pipe(catchError(err => this.handleError(err)))
    // .finally(() => this.hideLoader());
  }

  get(
    url: string,
    params?: HttpParams,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<Response> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    return this.http
      .get<Response>(this.baseUrl + url, { params: params })
      .pipe(catchError(err => this.handleError(err)))
    // .finally(() => this.hideLoader());
  }

  getSingle(
    url: string,
    params?: HttpParams,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<Response> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    return this.http
      .get<Response>(url, { params: params })
      .pipe(catchError(err => this.handleError(err)))
    // .finally(() => this.hideLoader());
  }

  getStream(
    url: string,
    params?: HttpParams,
    hasLoading: boolean = true,
    errorMessage: string = ""
  ): Observable<Response> {
    if (hasLoading) {
      // this.showLoader();
    }

    if (params) {
      params = new HttpParams({
        encoder: new CustomEncoder(),
        fromString: params.toString()
      });
    }

    return this.http
      .get<Response>(this.baseUrl + url, { params: params, observe: 'body', responseType: 'json' })
      .pipe(catchError(err => this.handleError(err)))
    // .finally(() => this.hideLoader());
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(errMsg);
  }

  // private showLoader() {
  //   $(".appLoading").css("display", "block");
  // }

  // private hideLoader() {
  //   $(".appLoading").css("display", "none");
  // }
}
