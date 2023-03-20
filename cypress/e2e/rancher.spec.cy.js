import { HomePage } from "../page-objects/HomePage";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login();
  });

  it("Home Page should open up", () => {
    cy.url().should("contain", "/dashboard/home");
  });

  it("Home Page banner title should be correct", () => {
    const homePage = new HomePage();
    homePage.elements.HomePageTitle().should("be.visible");
    homePage.elements.HomePageTitle().should("have.text", "Welcome to Rancher");
  });
});
