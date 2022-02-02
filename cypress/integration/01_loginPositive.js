import AccountPage from "./pageObjects/accountPage";
import HomePage from "./pageObjects/homePage";
const accountPage = new AccountPage();
const homePage = new HomePage();

describe("Login positive scenario", () => {
  it("Successful login", () => {
    cy.waitForHomePage();
    cy.goToLoginPage();
    //login with env credentials
    cy.login(`${Cypress.env("email")}`, `${Cypress.env("password")}`);
    //verify name of logged user
    homePage.userName.should("have.text", `${Cypress.env("userName")}`);
    cy.waitForHomePage();
  });
});
