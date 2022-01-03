import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { ICompanies } from "../../../../core/models/ICompanies";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompanies[]>{
    return this.http.get<any>('../../../../../assets/data/companies.json')
      .pipe(
        map((data: ICompanies[]) => data),
        catchError(error => throwError( ()=> String(error)))
    )
  }
}
