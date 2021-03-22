import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestAPIInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   var sesssion_data=sessionStorage.getItem('AUTHORIZATION');
      request=request.clone({
        setHeaders:{
          "TEJESWAR":   `Bearer ${sesssion_data}`,
          "SABRISH" :"VOONA"
        }   

      })
    return next.handle(request);
  }
}
