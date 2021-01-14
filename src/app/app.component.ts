import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ReportModel} from "./report.model"
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'report';
  reports: Array<ReportModel> = []

  constructor(private reportService: ReportService,private router:Router){ 
    this.api();
  }

  api(){
    this.reportService.getReport().subscribe((res: Array<ReportModel>) => {
      this.reports = res
    })
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"])
  }

}
