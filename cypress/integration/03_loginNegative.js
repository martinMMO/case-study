import LoginPage from "./pageObjects/loginPage";
const loginPage = new LoginPage();

describe("Login negative scenarios", () => {
  it("Wrong username", () => {
    //login with unregistred email
    cy.goToLoginPage();
    cy.login("email@email.sk", `${Cypress.env("password")}`);
    loginPage.errorMessage.should(
      "have.text",
      `${Cypress.env("wrongCredentialsErrorMsg")}`
    );
  });
  it("Blank username", () => {
    //login with empty username field
    cy.goToLoginPage();
    cy.login("", `${Cypress.env("password")}`);
    loginPage.errorMessage.should(
      "have.text",
      `${Cypress.env("mandatoryCredentialsErrorMsg")}`
    );
  });
  it("Wrong password", () => {
    //login with invalid password
    cy.goToLoginPage();
    cy.login(`${Cypress.env("email")}`, "Heslo123");
    loginPage.errorMessage.should(
      "have.text",
      `${Cypress.env("wrongCredentialsErrorMsg")}`
    );
  });
  it("Blank password", () => {
    //login with empty password field
    cy.goToLoginPage();
    cy.login(`${Cypress.env("email")}`);
    loginPage.errorMessage.should(
      "have.text",
      `${Cypress.env("mandatoryCredentialsErrorMsg")}`
    );
  });
  it("Wrong credentials", () => {
    //login with unregistred email and invalid password
    cy.goToLoginPage();
    cy.login("email@email.sk", "Heslo123");
    loginPage.errorMessage.should(
      "have.text",
      `${Cypress.env("wrongCredentialsErrorMsg")}`
    );
  });

  it("Blank credentials", () => {
    //login with empty username and password field
    cy.goToLoginPage();
    cy.login();
    loginPage.errorMessage.should(
      "have.text",
      `${Cypress.env("mandatoryCredentialsErrorMsg")}`
    );
  });
});
