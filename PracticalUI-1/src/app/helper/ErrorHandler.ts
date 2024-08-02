import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export class CustomErrorHandler{
    static handleError(err:HttpErrorResponse):Observable<never>{
        let errorMessage = '';
        if(err.error instanceof ErrorEvent)
            errorMessage = `An error occured: ${err.error.message}`;
        else
          errorMessage = `Server return code: ${err.status}, error message: ${err.error.message}`;
  
          return throwError(()=>errorMessage);
  
    }
}