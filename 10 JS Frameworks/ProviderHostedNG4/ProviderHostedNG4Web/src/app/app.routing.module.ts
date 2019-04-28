import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }    
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
