import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './home-client/home-client.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  declarations: [HomeClientComponent]
})
export class ClientModule { }
