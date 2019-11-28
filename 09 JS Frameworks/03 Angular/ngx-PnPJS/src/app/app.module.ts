import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { PnPGraphComponent } from "./pnpgraph/pnpgraph.component";
import { HomeComponent } from "./home/home.component";
import { PnPJsComponent } from "./pnpjs/pnpjs.component";
import { AdalService, AdalGuard, AdalInterceptor } from "adal-angular4";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PnPJsComponent,
    PnPGraphComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    AdalService,
    AdalGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
