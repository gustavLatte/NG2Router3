import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2router3AppComponent } from '../app/ng2router3.component';

beforeEachProviders(() => [Ng2router3AppComponent]);

describe('App: Ng2router3', () => {
  it('should create the app',
      inject([Ng2router3AppComponent], (app: Ng2router3AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2router3 works!\'',
      inject([Ng2router3AppComponent], (app: Ng2router3AppComponent) => {
    expect(app.title).toEqual('ng2router3 works!');
  }));
});
