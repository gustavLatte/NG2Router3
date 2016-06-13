import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng2router3-app',
  templateUrl: 'ng2router3.component.html',
  styleUrls: ['ng2router3.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Ng2router3AppComponent {
  title = 'ng2router3 works!';
}
