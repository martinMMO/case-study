import HomePage from "./pageObjects/homePage";
const homePage = new HomePage();

describe("Logout negative scenario", () => {
  it("Logout button not visible", () => {
    homePage.userIcon.click();
    cy.waitForHomePage();
    // verify logout button visibility
    cy.contains("Odhlásiť sa").should("not.exist");
  });
});
