import { KarmaNightmareAngularDemoPage } from './app.po';

describe('karma-nightmare-angular-demo App', function() {
  let page: KarmaNightmareAngularDemoPage;

  beforeEach(() => {
    page = new KarmaNightmareAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
