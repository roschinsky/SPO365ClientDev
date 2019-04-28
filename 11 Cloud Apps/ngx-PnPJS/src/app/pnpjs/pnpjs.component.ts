import { Component, OnInit } from "@angular/core";
import { sp } from "@pnp/sp";
import { AdalService } from "adal-angular4";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-pnpjs",
  templateUrl: "./pnpjs.component.html",
  styleUrls: ["./pnpjs.component.scss"]
})
export class PnPJsComponent implements OnInit {
  constructor(private adalService: AdalService) {}

  userMail: string;
  web: string;

  ngOnInit() {
    this.adalService.init(environment.config);
    var authContext = new AuthenticationContext(environment.config);

    var isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();

    if (isCallback && !authContext.getLoginError()) {
      console.log("Login error");
    }

    var user = authContext.getCachedUser();
    if (!user) {
      authContext.login();
    } else {
      this.userMail = user.userName;
    }

    this.adalService
      .acquireToken(environment.config.endpoints.sharePointUri)
      .subscribe(token => {
        sp.setup({
          sp: {
            headers: {
              Authorization: "Bearer " + token,
              Accept: "application/json;odata=verbose"
            },
            baseUrl: "https://integrationsonline.sharepoint.com"
          }
        });
      });
  }

  getWebTitle(): void {
    sp.web
      .select()
      .get()
      .then(web => (this.web = web.Title));
  }
}
