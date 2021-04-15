import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-erica',
  templateUrl: './erica.component.html',
  styleUrls: ['./erica.component.css']
})
export class EricaComponent implements OnInit {


  constructor(private httpService: HttpService) {
   }

  ngOnInit(): void {
  }

  public makeCSV(): void {
    this.httpService.sendGetRequest('/ericaETL').subscribe((data) => {
      console.log(data);
    })
  }

}
