import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IMenu } from '../Model/menuGetDto';
import { BASE_URL } from '../../app.config';
import { CustomErrorHandler } from '../../helper/ErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private http:HttpClient = inject(HttpClient);
  private baseUrl:string = inject(BASE_URL);

  getAllMenu(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>(`${this.baseUrl}/menu`)
                    .pipe(
                      catchError(CustomErrorHandler.handleError)
                    );
  }

 

}
