import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { HomeSupplierComponent } from './home-supplier/home-supplier.component';
import { SharedModule } from '../../shared/shared.module';
import { SupplierGatewayAbstract } from '../../domain/model/supplier/gateway/supplier-gateway.abstract';
import { SupplierService } from '../../infraestructure/supplier/supplier.service';
import { SupplierService as _SupplierService} from '../../domain/usecase/supplier/supplier.service';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule
  ],
  declarations: [HomeSupplierComponent],
  providers: [
    {
      provide: SupplierGatewayAbstract,
      useClass: SupplierService
    },
    _SupplierService
  ]
})
export class SupplierModule { }
