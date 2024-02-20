import { IFramePage } from "../../pages/IFrame";
import { IFrameAppPage } from "../../pages/IFrameApp";

describe("IFRAME", () => {
  beforeEach(() => {
    IFramePage.visit();
  });
  it("test iframe", () => {
    IFramePage.getIframe();
  });
});

describe.only("IFRAMEAPP", () => {
  beforeEach(() => {
    IFrameAppPage.visit();
  });
  it("test iframe with extension", () => {
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").then((iframeApp) => {
      cy.wrap(iframeApp).type("{selectAll}{del}").type("Hello World!");
      //or
      cy.wrap(iframeApp).clear().type("Hello Cypress!");
    });
  });
});
