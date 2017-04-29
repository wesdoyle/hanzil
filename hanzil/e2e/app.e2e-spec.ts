import { HanzilPage } from './app.po';

describe('hanzil App', () => {
  let page: HanzilPage;

  beforeEach(() => {
    page = new HanzilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
