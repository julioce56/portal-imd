import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opcion = 'Tipo de Consulta';

  @Input() set type(_type: string) {
    // this.opcion = _type;
    switch (_type) {
      case '/home/client':
        this.opcion = 'Cliente';
        break;
      case '/home/supplier':
        this.opcion = 'Proveedor';
        break;
      case '/home/seller':
        this.opcion = 'Vendedor';
        break;
      default:
        // code here !
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
