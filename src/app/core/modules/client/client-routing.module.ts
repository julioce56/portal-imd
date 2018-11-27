import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeClientComponent } from './home-client/home-client.component';

const routes: Routes = [
  { path: '', component: HomeClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
