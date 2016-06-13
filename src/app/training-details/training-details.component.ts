import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-training-details',
  templateUrl: 'training-details.component.html',
  styleUrls: ['training-details.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TrainingDetailsComponent implements OnInit {

  locId: Observable<string>;
  trainingId: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.locId = activatedRoute.params.map(r => r['locId']);
    this.trainingId = activatedRoute.params.map(r => r['trainingId']);
  }

  ngOnInit() {
  }

}
