import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/core/shared/header/header.component';
declare var $: any;

@Component({
  selector: 'app-home-supplier',
  templateUrl: './home-supplier.component.html',
  styleUrls: ['./home-supplier.component.scss']
})

export class HomeSupplierComponent implements OnInit {


  show = false;
  showMapButton = false;
  dataArray = [
    {
      vendedor: '2105 - Victor Valdez Muñoz',
      cliente: '001 Exito',
      proveedor: '001 - Familia'
    },
    {
      vendedor: '2006 - Adriana Quartas Rojas',
      cliente: '003 Merkahorro',
      proveedor: '003 - J & J'
    },
    {
      vendedor: '2204 - Mauricio Lopez Castañeda',
      cliente: '005 Dinastía',
      proveedor: '002 - Natipan'
    },
    {
      vendedor: '2503 - Lina Gomez Salas',
      cliente: '004 Carulla',
      proveedor: '006 - El Caribe'
    },
    {
      vendedor: '2407 - Carlos Isaza Casas',
      cliente: '002 Metro',
      proveedor: '005 - Axion'
    }
  ];

  constructor() {
  }

  ngOnInit() {

    $(document).ready(function () {
      $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
      });
    });
  }

  showTable() {
    this.show = true;
    const date1 = $('#dateEndDay').val();
    const date2 = $('#dateStartDay').val();
    // tslint:disable-next-line:no-unused-expression
    (date1 === date2) ? this.showMapButton = true : this.showMapButton = false;
  }

}
