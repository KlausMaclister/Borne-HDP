import { SKPage } from './app.po';

describe('sk App', () => {
  let page: SKPage;

  beforeEach(() => {
    page = new SKPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
