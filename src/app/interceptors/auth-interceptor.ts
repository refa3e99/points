// auth-interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.cookieService.get('AUTH');

        if (authToken) {
            const authRequest = request.clone({ withCredentials: true });
            return next.handle(authRequest);
        }

        return next.handle(request);
    }
}
