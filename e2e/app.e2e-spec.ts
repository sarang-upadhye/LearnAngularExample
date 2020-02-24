import { AngproPage } from './app.po';

describe('angpro App', function() {
  let page: AngproPage;

  beforeEach(() => {
    page = new AngproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
