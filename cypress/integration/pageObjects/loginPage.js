class loginPage {
  get emailInput() {
    return cy.get("#email");
  }
  get passwordInput() {
    return cy.xpath('//body/descendant::input[@id="pass"][1]');
  }
  get loginButton() {
    return cy.xpath('//body/descendant::button[@id="send2"][1]');
  }

  get pageTitle() {
    return cy.get(".page-title span");
  }
  get errorMessage() {
    return cy.get('[data-ui-id="message-error"] div');
  }
  get loader() {
    return cy.get('[data-role="loader"][style="display: block;"]');
  }
}

export default loginPage;
