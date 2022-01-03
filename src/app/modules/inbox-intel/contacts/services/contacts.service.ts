import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { IInboxIntelContacts } from "../../../../core/models/IInboxIntelContacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getInboxIntelContacts(): Observable<IInboxIntelContacts[]>{
    return this.http.get<any>('../../../../../assets/data/inbox-intel-contacts.json')
      .pipe(
        map((data: IInboxIntelContacts[]) => data),
        catchError(error => throwError( ()=> String(error)))
      )
  }
}
