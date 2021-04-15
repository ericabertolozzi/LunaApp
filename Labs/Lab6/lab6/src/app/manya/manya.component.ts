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

  constructor(private httpService: HttpService) {
   }

  ngOnInit(): void {
  }

  public showMyMessage = false

  public makeCSV(): void {
    this.httpService.sendGetRequest('/display').subscribe((data) => {
      console.log(data);
    })
  }
  clickEvent(){
    this.msg='Button is Clicked';
    return this.msg;
  }

}


