import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}

  get<Response=any>(
    endpoint: string,
    params?: any,
    reqOpts = {
      params: new HttpParams()
    }
  ) {
    if (params) {
      reqOpts.params = new HttpParams();

      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get<Response>(endpoint, reqOpts);
  }

  post<Response=any>(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post<Response>(endpoint, body, reqOpts);
  }

  put<Response=any>(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put<Response>(endpoint, body, reqOpts);
  }

  delete<Response=any>(endpoint: string, reqOpts?: any) {
    return this.http.delete<Response>(endpoint, reqOpts);
  }

  patch<Response=any>(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put<Response>(endpoint, body, reqOpts);
  }
}
