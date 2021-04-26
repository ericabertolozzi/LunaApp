import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpParams, JsonpClientBackend} from "@angular/common/http";
import { ViewEncapsulation } from '@angular/core';
import { Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
	name: 'safe'
})
export class SafePipe {

	constructor(protected _sanitizer: DomSanitizer) {

	}

	public transform(value: string, type: string = 'html'): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		switch (type) {
			case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
			case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
	}

}

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
  buttonsListText: string;

  constructor(private http: HttpClient, private httpService: HttpService, private sanitizer: DomSanitizer) {
    this.postName = "";
    this.postPreview = "";
    this.postLink = "";
    this.postCategory = "";
    this.articlesListText = "";
    this.buttonsListText = "";
  }

  ngOnInit(): void {
    this.getButtonsData();
    this.getArticlesData();
  }

  public getButtonsData(): void {
    this.httpService.sendGetRequest('/getButtonsData').subscribe((data) => {
      // console.log(data);
      var arr = JSON.parse(JSON.stringify(data));
      console.log(arr);
      for (let i=0; i<arr.length; i++) {
        this.buttonsListText += `
          <button type="submit" (click)="getArticlesDataCategory(`+ arr[i] +`)">`+arr[i]+`</button>
        `;
      }
    });
  }

  public getArticlesData(): void {
    this.httpService.sendGetRequest('/getArticlesData').subscribe((data) => {
      var arr = JSON.parse(JSON.stringify(data));
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
    })
  }

  public getArticlesDataCategory( category: string ): void {
    this.articlesListText = "";
    console.log( category );
    this.httpService.sendGetRequest('/getArticlesDataCategory/category/'+category).subscribe((data) => {
      var arr = JSON.parse(JSON.stringify(data));
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
    })
  }

}

interface Article {
  name: string;
  preview: string;
  link: string;
  category: string;
}
