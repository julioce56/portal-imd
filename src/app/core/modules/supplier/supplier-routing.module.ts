import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSupplierComponent } from './home-supplier/home-supplier.component';

const routes: Routes = [
  { path: '', component: HomeSupplierComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
