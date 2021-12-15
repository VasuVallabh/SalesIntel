import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { IContacts } from "../../../../models/IContacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContacts[]>{
    return this.http.get<any>('../../../../../assets/data/contacts.json')
      .pipe(
        map((data: IContacts[]) => data),
        catchError(error => throwError( ()=> String(error)))
      )
  }
}
