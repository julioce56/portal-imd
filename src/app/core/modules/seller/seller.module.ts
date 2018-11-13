import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { HomeSellerComponent } from './home-seller/home-seller.component';

@NgModule({
  imports: [
    CommonModule,
    SellerRoutingModule
  ],
  declarations: [HomeSellerComponent]
})
export class SellerModule { }
