import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-galery-modal',
  templateUrl: './galery-modal.component.html',
  styleUrls: ['./galery-modal.component.scss']
})
export class GaleryModalComponent implements OnInit {

  @Input() set getArray(arr: any) {
    this.imgArray = arr;
    this.changeImageArray.emit(this.imgArray);
    console.log(this.imgArray, 'set');
  }

  imgArray: string[] = [];

  @Output() changeImageArray: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() {
    console.log(this.imgArray);
  }

  ngOnInit() {
    const array = this.imgArray;
    $(document).ready(function () {
      addImgToModal();
    });

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
