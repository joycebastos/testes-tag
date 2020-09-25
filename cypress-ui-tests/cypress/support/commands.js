Cypress.Commands.add('url', () => {
  cy.visit('https://oefhlg.taglivros.com/associe-se/escolha-sua-caixinha');
});

Cypress.Commands.add('tagCuradoriaAnual', () => {
  cy.get('#buttonAnual')
        .should('contain', 'Quero plano anual')
        .click();
});


