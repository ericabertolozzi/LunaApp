import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FormBuilder, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';



declare function showInput():any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
 

  

  constructor(private http:HttpClient) { }
  

  ngOnInit(): void {
    // showInput();
  }

  public makeFirstDataSet(): void {
    this.http.post('/manyapost').subscribe((data) => {
      console.log(data);
    })
  }
  


}
