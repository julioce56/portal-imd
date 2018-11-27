import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { start } from 'repl';
declare var $: any;

@Component({
  selector: 'app-galery-modal',
  templateUrl: './galery-modal.component.html',
  styleUrls: ['./galery-modal.component.scss']
})
export class GaleryModalComponent implements OnInit {

  // Recibimos el array que contiene las rutas de las imagenes.
  @Input() set getArray(arr: any) {
    this.imgArray = arr;
    this.changeImageArray.emit(this.imgArray);
    console.log(this.imgArray, 'set');
  }

  @Input() set modalTitle(arr: any) {
    this.modalTitleVar = arr;
    this.changeModalTitle.emit(this.modalTitleVar);
    console.log(this.modalTitleVar, 'set modal');
  }
  imgArray: string[] = [];
  modalTitleVar: string[] = [];

  // Mantenemos los cambios sobre este array 2dataBinding.
  @Output() changeImageArray: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  @Output() changeModalTitle: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() {
  }

  ngOnInit() {
    const array = this.imgArray;
    const modalTitle = this.modalTitleVar;
  }

}
