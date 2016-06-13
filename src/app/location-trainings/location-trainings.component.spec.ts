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
import { LocationTrainingsComponent } from './location-trainings.component';

describe('Component: LocationTrainings', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LocationTrainingsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LocationTrainingsComponent],
      (component: LocationTrainingsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LocationTrainingsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LocationTrainingsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-location-trainings></app-location-trainings>
  `,
  directives: [LocationTrainingsComponent]
})
class LocationTrainingsComponentTestController {
}

