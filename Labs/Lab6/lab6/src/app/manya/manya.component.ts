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
    msg:String;
   }

  ngOnInit(): void {
  }


  public makeCSV(): void {
    this.httpService.sendGetRequest('/manyadisplay').subscribe((data) => {
      console.log(data);
    })
  }
  clickEvent(){
    this.msg='CSV Successfully Downloaded. Please find file in Labs/Lab6 and visualizations below.';
    return this.msg;
  }

}


