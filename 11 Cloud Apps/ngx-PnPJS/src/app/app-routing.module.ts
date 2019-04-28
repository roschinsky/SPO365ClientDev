import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PnPJsComponent } from './pnpjs/pnpjs.component';
import { PnPGraphComponent } from './pnpgraph/pnpgraph.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pnpjs', component: PnPJsComponent },
  { path: 'pnpgraph', component: PnPGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
