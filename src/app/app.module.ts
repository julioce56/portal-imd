import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ImdAppComponent } from './core/components/imd-app/imd-app.component';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from './core/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { GaleryModalComponent } from './core/shared/modals/galery-modal/galery-modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ImdAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SharedModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnCfe0UFQA8Yi4V2d_L8HBEy4CKaK7Y_Q&'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
