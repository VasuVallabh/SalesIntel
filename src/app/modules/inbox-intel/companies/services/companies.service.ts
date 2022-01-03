import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { IInboxIntelCompanies } from "../../../../core/models/IInboxIntelCompanies";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getInboxIntelCompanies(): Observable<IInboxIntelCompanies[]>{
    return this.http.get<any>('../../../../../assets/data/inbox-intel-companies.json')
      .pipe(
        map((data: IInboxIntelCompanies[]) => data),
        catchError(error => throwError( ()=> String(error)))
      )
  }
}
