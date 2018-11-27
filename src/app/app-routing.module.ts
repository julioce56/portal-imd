import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { ImdAppComponent } from './core/components/imd-app/imd-app.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'imdApp', component: ImdAppComponent},
      { path: 'client', loadChildren: './core/modules/client/client.module#ClientModule'},
      { path: 'seller', loadChildren: './core/modules/seller/seller.module#SellerModule'},
      { path: 'supplier', loadChildren: './core/modules/supplier/supplier.module#SupplierModule'}
    ]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
