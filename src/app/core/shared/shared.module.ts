import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { GaleryModalComponent } from './modals/galery-modal/galery-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, GaleryModalComponent],
  exports: [
    HeaderComponent,
    GaleryModalComponent
  ]
})
export class SharedModule { }
