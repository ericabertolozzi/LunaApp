import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  public makeFirstDataSet(): void {
    this.httpService.sendGetRequest('/ericaETL1').subscribe((data) => {
      console.log(data);
    })
  }

  public makeSecondDataSet(): void {
    this.httpService.sendGetRequest('/ericaETL2').subscribe((data) => {
      console.log(data);
    })
  }

}
