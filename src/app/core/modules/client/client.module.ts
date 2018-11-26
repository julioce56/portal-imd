import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './home-client/home-client.component';
import { SharedModule } from '../../shared/shared.module';
import { ClientGatewayAbstract } from '../../domain/model/client/gateway/client-gateway.abstract';
import { ClientService } from '../../infraestructure/client/client.service';
import { ClientService as _ClientService} from '../../domain/usecase/client/client.service';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ClientRoutingModule,
    SharedModule
  ],
  declarations: [HomeClientComponent],
  providers: [
    {
      provide: ClientGatewayAbstract,
      useClass: ClientService
    },
    _ClientService
  ]
})
export class ClientModule { }
