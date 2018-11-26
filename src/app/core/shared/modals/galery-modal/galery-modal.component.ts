import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  imgArray: string[] = [];

  // Mantenemos los cambios sobre este array 2dataBinding.
  @Output() changeImageArray: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() {
  }

  ngOnInit() {

    const array = this.imgArray;
    $(document).ready(function () {
      addImgToModal();
    });

    /* Con esta función agregamos la imagen al modal y creamos la configuración para que se 
     * comporte automatico
     */
    function addImgToModal() {
      for (let i = 0; i < array.length; i++) {
        if (i === 0) {
          $('#indModalDiv').append(
            '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
          );
          $('#fotoModalDiv').append(
            '<div class="carousel-item active">\
              <img class="d-block w-100" src="' + array[i] + '" alt="Second slide" height="400px" width="300px">\
            </div>'
            );
        } else {
          $('#fotoModalDiv').append(
            '<div class="carousel-item">\
              <img class="d-block w-100" src="' + array[i] + '" alt="Second slide" height="400px" width="300px">\
            </div>'
            );
            $('#indModalDiv').append(
              '<li data-target="#carouselExampleIndicators" data-slide-to="0"></li>'
            );
        }
      }
    }
  }

}
