import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-location-trainings',
  templateUrl: 'location-trainings.component.html',
  styleUrls: ['location-trainings.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LocationTrainingsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
