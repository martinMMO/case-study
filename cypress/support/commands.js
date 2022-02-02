import LoginPage from "../integration/pageObjects/loginPage";
import HomePage from "../integration/pageObjects/homePage";
const loginPage = new LoginPage();
const homePage = new HomePage();

Cypress.Commands.add("goToLoginPage", () => {
  homePage.userIcon.click();
  homePage.loginDropdownButton.click({ force: true });
  cy.intercept(
    "GET",
    "https://new.gymbeam.sk/amasty_xsearch/autocomplete/*"
  ).as("indexrecent");
  //wait for page to load
  cy.wait("@indexrecent");
  cy.url().should("contain", "customer/account/login/");
  loginPage.pageTitle.should("have.text", "Prihlásenie užívateľa");
});

Cypress.Commands.add("login", (email, password) => {
  if (email) {
    loginPage.emailInput.type(email);
  }
  if (password) {
    loginPage.passwordInput.type(password);
  }
  loginPage.loginButton.click();
});

Cypress.Commands.add("waitForHomePage", () => {
  cy.intercept(
    "GET",
    "https://new.gymbeam.sk/amasty_xsearch/autocomplete/*"
  ).as("indexrecent");
  //wait for page to load
  cy.wait("@indexrecent");
});
