import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { GaleryModalComponent } from './modals/galery-modal/galery-modal.component';
import { RouterModule } from '@angular/router';
import { MapModalComponent } from './modals/map-modal/map-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, GaleryModalComponent, MapModalComponent],
  exports: [
    HeaderComponent,
    GaleryModalComponent,
    MapModalComponent
  ]
})
export class SharedModule { }
