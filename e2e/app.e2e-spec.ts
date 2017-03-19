import { Angular2DynamicformsPage } from './app.po';

describe('angular2-dynamicforms App', function() {
  let page: Angular2DynamicformsPage;

  beforeEach(() => {
    page = new Angular2DynamicformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
