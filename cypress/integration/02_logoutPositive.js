import LoginPage from "./pageObjects/loginPage";
import HomePage from "./pageObjects/homePage";
const loginPage = new LoginPage();
const homePage = new HomePage();

describe("Logout positive scenario", () => {
  it("Successful logout", () => {
    homePage.logoutDropdownButton.click({ force: true });
    //verify url and pageTitle after logout
    cy.url().should("contain", "customer/account/login/");
    loginPage.pageTitle.should("have.text", "Prihlásenie užívateľa");
  });
});
