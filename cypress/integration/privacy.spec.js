/// <reference types="Cypress" />

describe('Testes da página dos termos de privacidade', function() {

  beforeEach(function () {
    cy.visit('./src/privacy.html');
  });

  it('Testa a página da política de privavidade de forma independente', function() {

    cy.contains('CAC TAT - Política de privacidade').should('be.visible');

  });

});