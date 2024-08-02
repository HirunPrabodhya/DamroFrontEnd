import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IUser } from './Model/UserGetDto';
import { BASE_URL } from '../app.config';
import { CustomErrorHandler } from '../helper/ErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http:HttpClient = inject(HttpClient);
  private baseUrl:string = inject(BASE_URL);
  getAllUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.baseUrl}/users`)
                    .pipe(
                      catchError(CustomErrorHandler.handleError)
                    );
  }
}
