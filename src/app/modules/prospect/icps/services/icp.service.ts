import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { IICPs } from '../../../../models/IICPs'

@Injectable({
  providedIn: 'root'
})
export class IcpService {

  constructor(private http: HttpClient) { }

  getIcps(): Observable<IICPs[]>{
    return this.http.get<any>('../../../../../assets/data/icps.json')
      .pipe(
        map((data: IICPs[]) => data),
        catchError(error => throwError( ()=> String(error)))
      )
  }

}
