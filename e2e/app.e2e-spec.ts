import { PortpholioPage } from './app.po';

describe('portpholio App', () => {
  let page: PortpholioPage;

  beforeEach(() => {
    page = new PortpholioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
