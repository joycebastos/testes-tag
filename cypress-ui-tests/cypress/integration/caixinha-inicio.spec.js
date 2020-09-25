import { elementosDaTagCuradoria, elementosDaTagIneditos } from '../pages/defaultElemntsTagCuradoria';

describe('Escolher caixinha', () => {
  beforeEach('Acessar URL da caixinha', () => {
    cy.url();
  });

  context('Visualizar informações da caixinha tag curadoria', () => {
    it('Visualizar os elementos da página da caixinha tag curadoria', () => {
      elementosDaTagCuradoria();
    });

    it('Escolher plano anual', () => {
      cy.get('#buttonAnual')
        .should('contain', 'Quero plano anual')
        .click();
      cy.get('.screen-container__text').should('contain', 'Preencha seus dados pessoais.');
    });

    it('Escolher plano manesal', () => {
      cy.get('#buttonMensal')
        .should('contain', 'Quero plano mensal')
        .click();
      cy.get('.screen-container__text').should('contain', 'Preencha seus dados pessoais.');
    });
  });

  context('Visualizar informações da caixinha tag ineditos', () => {
    it('Visualizar os elementos da página da caixinha tag inéditos', () => {
      cy.get('.sc-bwzfXH.QGfNf').click();
      elementosDaTagIneditos();
    });

    it('Escolher plano anual', () => {
      cy.get('.sc-bwzfXH.QGfNf').click();
      cy.get('#buttonAnual')
        .should('contain', 'Quero plano anual')
        .click();
      cy.get('.screen-container__text').should('contain', 'Preencha seus dados pessoais.');
    });

    it('Escolher plano manesal', () => {
      cy.get('.sc-bwzfXH.QGfNf').click();
      cy.get('#buttonMensal')
        .should('contain', 'Quero plano mensal')
        .click();
      cy.get('.screen-container__text').should('contain', 'Preencha seus dados pessoais.');
    });
  });
});