class accountPage {
  get contactEmail() {
    return cy.get('[class="box-content"] p:nth-child(2)');
  }
}

export default accountPage;
