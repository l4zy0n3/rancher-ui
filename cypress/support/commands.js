import { LoginPage } from "../page-objects/loginPage";

Cypress.Commands.add("login", () => {
  cy.visit("");
  const loginPage = new LoginPage();
  loginPage.elements.loginUsername().type(Cypress.env("username"));
  loginPage.elements.loginPassword().type(Cypress.env("password"));
  loginPage.elements.LoginButton().click();
});
