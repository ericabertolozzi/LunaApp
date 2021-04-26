import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  postName: string;
  postEmail: string;
  postPW: string;
  postMode: string;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.postName = "";
    this.postEmail = "";
    this.postPW = "";
    this.postMode = "";
  }

  ngOnInit(): void {
  }

  public sendData(): void {
    this.http.post<User>('http://localhost:3000/login',{ title: 'Angular POST Request Example' }).subscribe((data) => {
      this.postName = data.name;
      this.postEmail = data.email; 
      this.postPW = data.psw;
      this.postMode = data.mode;

      console.log(data);
    })
  }

}

interface User {
  name: string;
  email: string;
  psw: string;
  mode: string;
}
