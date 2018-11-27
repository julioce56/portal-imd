import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSellerComponent } from './home-seller/home-seller.component';

const routes: Routes = [
  { path: '', component: HomeSellerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
