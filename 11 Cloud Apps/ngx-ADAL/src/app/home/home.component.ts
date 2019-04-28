import { Component, OnInit } from "@angular/core";
import { AdalService } from "adal-angular4";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { O365Profile } from "../shared/model";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user: any;
  token: any;
  profile: O365Profile;

  constructor(
    private adalService: AdalService,
    protected httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.user = this.adalService.userInfo;
    this.user.token = this.user.token.substring(0, 10) + "...";
  }

  private getToken(endpoint: string, action: (value: string) => void) {
    if (this.user != null) {
      this.adalService.acquireToken(endpoint).subscribe(action);
    }
  }

  public getProfile() {
    this.getToken(environment.config.endpoints.graphApiUri, token => {
      var h = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      });

      this.httpClient
        .get(`${environment.config.endpoints.graphApiUri}/v1.0/me`, {
          headers: h
        })
        .subscribe((data: O365Profile) => (this.profile = data));
    });
  }

  public getPhoto() {
    this.getToken(environment.config.endpoints.graphApiUri, token => {
      var header = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      this.httpClient
        .get(
          `${environment.config.endpoints.graphApiUri}/beta/me/photo/$value`,
          {
            headers: header,
            responseType: "blob"
          }
        )
        .pipe(map(blob => URL.createObjectURL(blob)))
        .subscribe(
          url =>
            (this.profile.picture = this.sanitizer.bypassSecurityTrustUrl(url))
        );
    });
  }
}
