import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedModule
  ],
  declarations: [HomeSellerComponent]
})
export class SellerModule { }
