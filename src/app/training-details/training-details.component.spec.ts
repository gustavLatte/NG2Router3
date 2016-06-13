import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TrainingDetailsComponent } from './training-details.component';

describe('Component: TrainingDetails', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TrainingDetailsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TrainingDetailsComponent],
      (component: TrainingDetailsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TrainingDetailsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TrainingDetailsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-training-details></app-training-details>
  `,
  directives: [TrainingDetailsComponent]
})
class TrainingDetailsComponentTestController {
}

