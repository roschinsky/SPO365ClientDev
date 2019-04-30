import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MaterialModule } from "./material.module";
import { AdalService, AdalGuard, AdalInterceptor } from "adal-angular4";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ToolbarComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [
    AdalService,
    AdalGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
