import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 
import { LoaderService } from './loader.service';

@Injectable()
export class EmployeeInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {
  
  }

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {
          this.loaderService.isLoading.next(true);
          setTimeout(()=>{
                this.loaderService.isLoading.next(false);
                }, 3000)
        },
      )
    );
  }
}
