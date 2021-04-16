import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-helena',
  templateUrl: './helena.component.html',
  styleUrls: ['./helena.component.css']
})
export class HelenaComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public makeCSV1(): void {
    this.httpService.sendGetRequest('/helenaETL1').subscribe((data) => {
      console.log(data);
    })
  }

  public makeCSV2(): void {
    this.httpService.sendGetRequest('/helenaETL2').subscribe((data) => {
      console.log(data);
    })
  }

}