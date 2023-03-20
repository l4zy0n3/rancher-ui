export class LoginPage {
  elements = {
    loginUsername: () => cy.get('[data-testid="local-login-username"]'),
    loginPassword: () => cy.get('[data-testid="local-login-password"]'),
    LoginButton: () => cy.get('[data-testid="login-submit"]'),
  };
}
