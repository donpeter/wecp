import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {Activity} from "./activity";

@Injectable()
export class ActivityService {
  private apiUrl: String = environment.apiUrl;
  constructor(private http: HttpClient, private  httpHeader: HttpHeaders) { }

  getActivities(id): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Activity>(url).pipe(
      tap(_ => console.log(`fetched activity id=${id}`))
    );
  }




}
