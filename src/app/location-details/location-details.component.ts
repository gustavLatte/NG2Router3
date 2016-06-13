import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-location-details',
  templateUrl: 'location-details.component.html',
  styleUrls: ['location-details.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LocationDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
