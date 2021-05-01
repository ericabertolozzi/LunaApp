import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  postName: string;
  postEmail: string;
  postPW: string;
  postMode: string;
  postAge: number;


  constructor(private http: HttpClient, private httpService: HttpService) {
    this.postName = "";
    this.postEmail = "";
    this.postPW = "";
    this.postMode = "";
    this.postAge = 0;
  }

  ngOnInit(): void {
  }

  public sendData(): void {
    this.http.post<User>('http://localhost:3000/login',{ title: 'Angular POST Request Example' }).subscribe((data) => {
      this.postName = data.name;
      this.postEmail = data.email; 
      this.postPW = data.psw;
      this.postMode = data.mode;
      this.postAge = data.age;

      console.log(data);
    })
  }

  public checkUserExists(): void {
    this.http.post<Login>('http://localhost:3000/login',{ title: 'Angular POST Request Example' }).subscribe((data) => {
      this.postEmail = data.email; 
      this.postPW = data.psw;
      console.log(data);
    })
  }
}

interface User {
  name: string;
  email: string;
  psw: string;
  mode: string;
  age: number;
}

interface Login {
  email: string;
  psw: string;
}
