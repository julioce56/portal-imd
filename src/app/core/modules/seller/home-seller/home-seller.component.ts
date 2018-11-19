import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.scss']
})
export class HomeSellerComponent implements OnInit {

  show: boolean;
  showMapButton: boolean;

  constructor() {
    this.show = false;
    this.showMapButton = false;
  }

  ngOnInit() {

    $(document).ready(function() {
      $('.selectpicker').selectpicker({
           style: 'btn-info',
           size: 4
          });
          });
  }

  showTable () {
    this.show = true;
    const date1 = $('#dateEndDay').val();
    const date2 = $('#dateStartDay').val();
    // tslint:disable-next-line:no-unused-expression
    (date1 === date2) ? this.showMapButton = true : this.showMapButton = false;
  }

}
