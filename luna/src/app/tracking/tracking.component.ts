import { Component, OnInit } from '@angular/core';

declare function showInput():any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    showInput();
  }

}
