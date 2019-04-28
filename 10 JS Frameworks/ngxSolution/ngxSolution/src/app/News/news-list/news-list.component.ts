import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { NewsItem } from "../model";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  constructor(private ns: NewsService) {}

  items: NewsItem[];
  current: NewsItem;

  ngOnInit() {
    this.ns.getNews().subscribe(data => (this.items = data.value));
  }

  showNews(item: NewsItem) {
    this.current = item;
  }
}
