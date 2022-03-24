Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

  cy.get('#firstName').type('Thiago');
  cy.get('#lastName').type('Barboza');
  cy.get('#email').type('thiago.o.gostoso@elGostosos.com');
  cy.get('#open-text-area').type('texto', { delay: 0 });
  cy.contains('button', 'Enviar').click();

});