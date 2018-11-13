import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { HomeSupplierComponent } from './home-supplier/home-supplier.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule
  ],
  declarations: [HomeSupplierComponent]
})
export class SupplierModule { }
