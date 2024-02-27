import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private serviceUser: UserService) {}

  intercept(request: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.serviceUser.currentUser;
    if(user.token){
      request = request.clone({
        setHeaders:{
          acces_token: user.token
        }
      })
    }
    return handler.handle(request);
  }
}
