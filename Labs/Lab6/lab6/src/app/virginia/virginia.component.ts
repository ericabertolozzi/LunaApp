import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-virginia',
  templateUrl: './virginia.component.html',
  styleUrls: ['./virginia.component.css']
})
export class VirginiaComponent implements OnInit {


  constructor(private httpService: HttpService) {
   }

  ngOnInit(): void {
  }

  public makeCSV1(): void {
    console.log("Getting all articles under the category, 'General'");
    this.httpService.sendGetRequest('/virginiaETL1').subscribe((data) => {
      console.log(data);
    });
  }

  public makeCSV2(): void {
    console.log("Getting all articles under the category, 'Birth Control'");
    this.httpService.sendGetRequest('/virginiaETL2').subscribe((data) => {
      console.log(data);
    })
  }

}
