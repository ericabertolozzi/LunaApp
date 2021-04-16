import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-manya',
  templateUrl: './manya.component.html',
  styleUrls: ['./manya.component.css']
})
export class ManyaComponent implements OnInit{
  msg!:string;
  msg1!:string;

  constructor(private httpService: HttpService) {
    msg:String;
    msg1:String;
   }

  ngOnInit(): void {
  }


  public makeCSV(): void {
    this.httpService.sendGetRequest('/manyadisplay').subscribe((data) => {
      console.log(data);
    })
  }
  public makeCSV1(): void {
    this.httpService.sendGetRequest('/manyadisplay1').subscribe((data) => {
      console.log(data);
    })
  }
  clickEvent(){
    this.msg='CSV (cycle_tracking1) Successfully Downloaded. Please find file in Labs/Lab6 and visualizations below.';
    return this.msg;
  }
  clickEvent1(){
    this.msg='CSV (cycle_tracking2) Successfully Downloaded. Please find file in Labs/Lab6 and visualizations below.';
    return this.msg;
  }

}


