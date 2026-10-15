import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) => next(request).pipe(
  catchError((error: HttpErrorResponse) => {
    console.error('HTTP request failed', { status: error.status, url: request.url });
    return throwError(() => error);
  }),
) as import('rxjs').Observable<HttpEvent<unknown>>;
