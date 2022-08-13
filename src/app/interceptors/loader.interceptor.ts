import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { LoaderService } from '../services/loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderServices: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const unDisplay: boolean = (request.url.includes('invoices/suppliers') && request.method == 'GET');

    if (!unDisplay)
      this.loaderServices.setLoading(true, request.url);
      
    return next.handle(request)
      .pipe(catchError((err) => {
        this.loaderServices.setLoading(false, request.url);
        return err;
      }))
      .pipe(map<any, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.loaderServices.setLoading(false, request.url);
        }
        return evt;
      }));
  }
}
