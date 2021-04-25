import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {HttpClient, JsonpClientBackend} from "@angular/common/http";
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LearnComponent implements OnInit {
  postName: string;
  postPreview: string;
  postLink: string;
  postCategory: string;
  articlesListText: string;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.postName = "";
    this.postPreview = "";
    this.postLink = "";
    this.postCategory = "";
    this.articlesListText = "";
  }

  ngOnInit(): void {
    this.getArticlesData();
  }

  public sendData(): void {
    this.http.post<Article>('http://localhost:3000/learn',{ title: 'Angular POST Request Example' }).subscribe((data) => {
      this.postName = data.name;
      this.postPreview = data.preview;
      this.postLink = data.link;
      this.postCategory = data.category;
      console.log( "sendData()" );
      console.log(data);
    })
  }

  public getArticlesData(): void {
    this.httpService.sendGetRequest('/getArticlesData').subscribe((data) => {
      var arr = JSON.parse(JSON.stringify(data));
      console.log("getArticlesData");
      console.log(arr);

      for (let i=0; i<arr.length; i++) {
        this.articlesListText += `
          <div class="article">
            <h1 class="text-left"><a class="name" href="`+arr[i]['link']+`">`+arr[i]['name']+`</a></h1>
            <p>`+arr[i]['preview']+`</p>
            <div>
              <div class="more label text-right"><a href="`+arr[i]['link']+`">Read more</a></div>
            </div>
            <div class="clear"></div>
            <hr>
          </div>
        `;
      }


      // <!-- let rawdata = fs.readFileSync('learn.json');
      // let articles = JSON.parse(rawdata)["articles"];
      // var htmladd = '';
      // for( i=0; i < articles.length; i++ ) {
      //   var name = articles[i]["name"];
      //   var preview = articles[i]["preview"];
      //   var link = articles[i]["link"];
      //   htmladd += `
      //     <div class="article">
      //       <h1 class="text-left"><a class="name" href="`+link+`">`+name+`</a></h1>
      //       <p>`+preview+`</p>
      //       <div>
      //         <div class="more label text-right"><a href="`+link+`">Read more</a></div>
      //       </div>
      //       <div class="clear"></div>
      //       <hr>
      //     </div>
      //   `;

    })
  }

}

interface Article {
  name: string;
  preview: string;
  link: string;
  category: string;
}
