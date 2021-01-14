import { Component } from '@angular/core';
import {ReportModel} from "./report.model"
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'report';
  reports: Array<ReportModel> = [
    {
      country: "Nepal",
      countryCode: "+977"
    },
    {
      country: "India",
      countryCode: "+91"
    },
    {
      country: "Jambia",
      countryCode: "+27"
    },
    {
      country: "Hongkong",
      countryCode: "+471"
    },
    {
      country: "dubai",
      countryCode: "+48"
    }
  ]

  constructor(private reportService: ReportService){ 
    this.api();
  }

  api(){
    this.reportService.getReport().subscribe((res: Array<ReportModel>) => {
      console.log("response of getallreport",res)
      this.reports = res
    })
  }

}
