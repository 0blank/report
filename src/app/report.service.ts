import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly URL = 'https://clienta-apigateway.azurewebsites.net/report/getAllReports';

  constructor(private http:HttpClient) { }

  getReport(): Observable<any> {
    const headers =  {
      headers: new  HttpHeaders({ 
        'Authorization': `Bearer ${localStorage.getItem("token")}`})
    };
    return this.http.get(this.URL,headers)
  }
}
