import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-virginia',
  templateUrl: './virginia.component.html',
  styleUrls: ['./virginia.component.css']
})

export class VirginiaComponent implements OnInit {
  msg1!:string;
  msg2!:string;

  constructor(private httpService: HttpService) {
    msg1:String;
    msg2:String;
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

  clickEvent1(){
    this.msg1='CSV1 Successfully Downloaded. Please find file in Labs/Lab6.';
    return this.msg1;
  }
  clickEvent2(){
    this.msg2='CSV2 Successfully Downloaded. Please find file in Labs/Lab6.';
    return this.msg2;
  }

}
