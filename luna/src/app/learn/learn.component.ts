import { Component, OnInit } from '@angular/core';
import articlesData from '../../assets/json/learn.json';

interface Article {
  name: String;
  preview: String;
  link: String;
  category: String;
}

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  name = 'Angular';
  articles: Article[] = articlesData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
