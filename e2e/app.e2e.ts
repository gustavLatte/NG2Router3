import { Ng2router3Page } from './app.po';

describe('ng2router3 App', function() {
  let page: Ng2router3Page;

  beforeEach(() => {
    page = new Ng2router3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2router3 works!');
  });
});
