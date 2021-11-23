import {
    HttpClient,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
  
  @Injectable()
  export class BaseService {
    baseUrl: string;
    http: HttpClient;
    serviceUrl!: string;
  
    constructor(http: HttpClient) {
      this.http = http;
      this.baseUrl = `${environment.server}${environment.apiUrl}/`;
    }
  
    getAll<T>(resource?: string): Observable<T> {
      return this.http.get<T>(this.baseUrl + this.serviceUrl + (typeof resource === 'undefined' ? '' : resource));
    }
  
    getSingle<T>(id?: number | string, resource?: string): Observable<T> {
      return this.http.get<T>(
        this.baseUrl + this.serviceUrl + (typeof resource === 'undefined' ? '' : resource) + "/" + id
      );
    }
  
    post<T>(data: any, resource?: string): Observable<T> {
      return this.http.post<T>(
        this.baseUrl + this.serviceUrl + "/" + (typeof resource === 'undefined' ? '' : resource),
        JSON.stringify(data)
      );
    }
  
    add<T>(itemName: string, resource?: string): Observable<T> {
      const toAdd = { itemName };
  
      return this.http.post<T>(this.baseUrl + this.serviceUrl + (typeof resource === 'undefined' ? '' : resource), toAdd);
    }
  
    update<T>(id: number | string, itemToUpdate: any, resource?: string): Observable<T> {
      return this.http.put<T>(
        this.baseUrl + this.serviceUrl + (typeof resource === 'undefined' ? '' : resource) + "/" + id,
        itemToUpdate
      );
    }
  
    delete<T>(id: number | string, resource?: string): Observable<T> {
      return this.http.delete<T>(this.baseUrl + this.serviceUrl + (typeof resource === 'undefined' ? '' : resource) + "/" + id);
    }
  }
  