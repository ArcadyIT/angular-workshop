import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiRequest = request.clone({
      url: `${environment.baseApiUrl}/api${request.url}`
    });

    console.log(`Intercepting http request with endpoint ${request.url} to ${apiRequest.url}`);

    return next.handle(apiRequest);
  }
}
