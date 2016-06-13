export class Ng2router3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2router3-app h1')).getText();
  }
}
