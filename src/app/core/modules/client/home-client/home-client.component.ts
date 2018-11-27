import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})

export class HomeClientComponent implements OnInit {

  show = false;
  showMapButton = false;
  public cols: any;
  dataArray = [
    {
      id: '1',
      vendedor: '2105 - Victor Valdez Muñoz',
      nombre: '001 Exito',
      proveedor: '001 - Familia'
    },
    {
      id: '2',
      vendedor: '2006 - Adriana Quartas Rojas',
      nombre: '003 Merkahorro',
      proveedor: '003 - J & J'
    },
    {
      id: '3',
      vendedor: '2204 - Mauricio Lopez Castañeda',
      nombre: '005 Dinastía',
      proveedor: '002 - Natipan'
    },
    {
      id: '4',
      vendedor: '2503 - Lina Gomez Salas',
      nombre: '004 Carulla',
      proveedor: '006 - El Caribe'
    },
    {
      id: '5',
      vendedor: '2407 - Carlos Isaza Casas',
      nombre: '002 Metro',
      proveedor: '005 - Axion'
    }
  ];

  imgArray: string[] = [
    'src/assets/fotos/m1.jpg',
    'src/assets/fotos/m2.jpg',
    'src/assets/fotos/m3.jpg'
  ];

  arrayModalTitle: string[] = [];

  constructor() {
    this.createColumns();
  }

  ngOnInit() {

    $(document).ready(function () {
      $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
      });
    });
  }

  sendDataToTitle(data: string) {
    this.arrayModalTitle.push(data);
  }

  createColumns(): void {
    this.cols = [
      { field: 'id', header: '# Reg' },
      { field: 'vendedor', header: 'Vendedor' },
      { field: 'proveedor', header: 'Proveedor' },
      { field: 'foto', header: 'Foto' }
    ];
  }

  showTable() {
    this.show = true;
    const date1 = $('#dateEndDay').val();
    const date2 = $('#dateStartDay').val();
    // tslint:disable-next-line:no-unused-expression
    (date1 === date2) ? this.showMapButton = true : this.showMapButton = false;
  }

}
