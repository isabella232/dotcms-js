import { DotcmsJsPage } from './app.po';

describe('dotcms-js App', () => {
  let page: DotcmsJsPage;

  beforeEach(() => {
    page = new DotcmsJsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
