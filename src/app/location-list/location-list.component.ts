import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-location-list',
  templateUrl: 'location-list.component.html',
  styleUrls: ['location-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LocationListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
