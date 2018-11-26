import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentPath: string;

  public constructor(
    private _route: Router
  ) {
    this._route.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this._route.url;
      }
    });
  }

  ngOnInit() {
  }

}
