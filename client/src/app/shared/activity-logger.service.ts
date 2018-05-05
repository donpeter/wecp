import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {ActivityLog} from "./activity";
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ActivityLoggerService {
  private apiUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getActivityLogs(id): Observable<ActivityLog[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map(res => res.body.logs),
        catchError(err => {
          return err;
        })
      );
  }

  saveActivityLog(id: String, activityLog: ActivityLog): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.post(url, [activityLog]);
  }


}
