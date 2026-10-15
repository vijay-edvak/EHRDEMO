import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService, SKIP_AUTH } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  const token = auth.accessToken();
  const csrf = auth.csrfToken();
  const headers: Record<string, string> = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (csrf) headers['X-CSRF-Token'] = csrf;
  const outgoing = request.clone({ withCredentials: true, setHeaders: headers });
  return next(outgoing).pipe(
    catchError((error: HttpErrorResponse) => {
      const isAuthEndpoint = request.url.endsWith('/auth/login') || request.url.endsWith('/auth/refresh');
      if (error.status !== 401 || request.context.get(SKIP_AUTH) || isAuthEndpoint) return throwError(() => error);
      return auth.refresh().pipe(
        switchMap((refreshed) => {
          if (!refreshed) return throwError(() => error);
          const retryHeaders: Record<string, string> = { Authorization: `Bearer ${auth.accessToken() ?? ''}` };
          const retryCsrf = auth.csrfToken();
          if (retryCsrf) retryHeaders['X-CSRF-Token'] = retryCsrf;
          return next(request.clone({ withCredentials: true, setHeaders: retryHeaders }));
        }),
      );
    }),
  );
};
