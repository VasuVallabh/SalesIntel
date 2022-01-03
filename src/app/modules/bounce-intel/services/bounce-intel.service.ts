import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { IBounceIntel } from "../../../core/models/IBounceIntel";

@Injectable({
  providedIn: 'root'
})
export class BounceIntelService {

  constructor(private http: HttpClient) { }

  getBounceIntelCompanies(): Observable<IBounceIntel[]>{
    return this.http.get<any>('../../../../../assets/data/bounce-intel.json')
      .pipe(
        map((data: IBounceIntel[]) => data),
        catchError(error => throwError( ()=> String(error)))
      )
  }
}
