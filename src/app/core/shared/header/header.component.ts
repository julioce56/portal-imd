import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opcion = 'Tipo de Consulta';
  constructor() { }

  ngOnInit() {
  }

  selectOption (opc: string) {
    this.opcion = opc;
  }

}
