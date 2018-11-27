import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { SharedModule } from '../../shared/shared.module';
import { SellerGatewayAbstract } from '../../domain/model/seller/gateway/seller-gateway.abstract';
import { SellerService } from '../../infraestructure/seller/seller.service';
import { SellerService as _SellerService } from '../../domain/usecase/seller/seller.service';

@NgModule({
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedModule
  ],
  declarations: [HomeSellerComponent],
  providers: [
    {
      provide: SellerGatewayAbstract,
      useClass: SellerService
    },
    _SellerService
  ]
})
export class SellerModule { }
