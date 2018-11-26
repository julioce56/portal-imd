import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { HomeSupplierComponent } from './home-supplier/home-supplier.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule
  ],
  declarations: [HomeSupplierComponent]
})
export class SupplierModule { }
