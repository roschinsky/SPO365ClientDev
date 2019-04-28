import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewsItem } from "./model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

declare var _spPageContextInfo;

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private httpClient: HttpClient) {
    this.rootUrl = _spPageContextInfo.webAbsoluteUrl;
  }

  rootUrl: string;
  items: NewsItem[];

  getNews() {
    return this.httpClient.get<any>(
      `${this.rootUrl}/_api/web/lists/getByTitle('News')/items`
    );
    // .pipe(map(res => res.value));
  }
}
