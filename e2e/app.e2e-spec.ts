import { ScotlandyardToolPage } from './app.po';

describe('scotlandyard-tool App', () => {
  let page: ScotlandyardToolPage;

  beforeEach(() => {
    page = new ScotlandyardToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
