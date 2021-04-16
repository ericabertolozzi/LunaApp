import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-simi',
  templateUrl: './simi.component.html',
  styleUrls: ['./simi.component.css']
})
export class SimiComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

<<<<<<< HEAD
 public makeCSV(): void {
    this.httpService.sendGetRequest('/SimiETL').subscribe((data) => {
=======
  public makeFirstDataSet(): void {
    this.httpService.sendGetRequest('/SimiETL1').subscribe((data) => {
>>>>>>> f49c1686fdc4a2e9c4bf49cac9224104a1afef6c
      console.log(data);
    })
  }

  public makeSecondDataSet(): void {
    this.httpService.sendGetRequest('/SimiETL2').subscribe((data) => {
      console.log(data);
    })
  }

  

}
