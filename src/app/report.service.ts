import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly URL = 'https://clienta-reportservice.azurewebsites.net/report/getAllReports';

  constructor(private http:HttpClient) { }

  getReport(): Observable<any> {
    return this.http.get(this.URL,)
  }
}
