import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {

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
