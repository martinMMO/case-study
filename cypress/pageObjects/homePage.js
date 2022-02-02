class homePage {
  get userIcon() {
    return cy.get('[for="user-dropnav"]');
  }
  get userName() {
    return cy.get('li[data-block="user"] .logged-in');
  }
  get loginDropdownButton() {
    return cy.get(
      'li[data-block="user"] a[href="https://new.gymbeam.sk/customer/account/login/"]'
    );
  }
  get logoutDropdownButton() {
    return cy.get(
      'li[data-block="user"] a[href="https://new.gymbeam.sk/customer/account/logout/"]'
    );
  }
  get logoutTextButton() {
    return cy.xpath("//strong[contains(text(),'Odhlásiť sa')]");
  }
  get myAccountDropdownButton() {
    return cy.get(
      'li[data-block="user"] a[href="https://new.gymbeam.sk/customer/account/"]'
    );
  }
  get firstMenu() {
    return cy.get('[href="https://new.gymbeam.sk/sportova-vyziva"]');
  }
  get pageSubtitle() {
    return cy.get("h2 a");
  }
}

export default homePage;
