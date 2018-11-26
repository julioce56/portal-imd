import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './home-client/home-client.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ClientRoutingModule,
  ],
  declarations: [HomeClientComponent]
})
export class ClientModule { }
