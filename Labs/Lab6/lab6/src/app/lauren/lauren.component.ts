import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-lauren',
  templateUrl: './lauren.component.html',
  styleUrls: ['./lauren.component.css']
})
export class LaurenComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public makeCSV(): void {
    this.httpService.sendGetRequest('/laurendisplay').subscribe((data) => {
      console.log(data);
    })
  }

}
