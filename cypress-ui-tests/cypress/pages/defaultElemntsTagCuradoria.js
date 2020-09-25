export const elementosDaTagCuradoria = () => {
  cy.get('.screen-container :nth-child(1) > h2.sc-bZQynM')
    .should('contain', 'Escolha sua caixinha');
  cy.get('.ipOixE .sc-bdVaJa').should('contain', 'Grandes nomes da literatura indicam seus livros preferidos aos associados.');
  cy.get('.hAjNvF > :nth-child(2) > .sc-bZQynM').should('contain', 'Plano Anual');
  cy.get('.hAjNvF > .bdebad > .src__Box-sc-1sbtrzs-0 > .preco-plano > .preco-plano__valor').should('contain', '55,90');
  cy.get('#buttonAnual').should('contain', 'Quero plano anual');
  cy.get('.dUEQDY :nth-child(1) .sc-bZQynM').should('contain', 'Plano Mensal');
  cy.get(':nth-child(1) > .src__Flex-sc-1sbtrzs-1 .src__Box-sc-1sbtrzs-0 .sc-bxivhb').should('contain', 'Assinatura recorrente com cobrança automática');
  cy.get('.dUEQDY > .bdebad > .src__Box-sc-1sbtrzs-0 > .preco-plano > .preco-plano__valor').should('contain', '62,90');
  cy.get('#buttonMensal').should('contain', 'Quero plano mensal');
};

export const elementosDaTagIneditos = () => {
  cy.get('.screen-container :nth-child(1) > h2.sc-bZQynM')
    .should('contain', 'Escolha sua caixinha');
  cy.get('.ipOixE .sc-bdVaJa').should('contain', 'Os best-sellers mundiais ainda inéditos no Brasil, traduzidos em primeira mão.');
  cy.get('.hAjNvF > :nth-child(2) > .sc-bZQynM').should('contain', 'Plano Anual');
  cy.get('.hAjNvF > .bdebad > .src__Box-sc-1sbtrzs-0 > .preco-plano > .preco-plano__valor').should('contain', '45,90');
  cy.get('#buttonAnual').should('contain', 'Quero plano anual');
  cy.get('.dUEQDY :nth-child(1) .sc-bZQynM').should('contain', 'Plano Mensal');
  cy.get(':nth-child(1) > .src__Flex-sc-1sbtrzs-1 .src__Box-sc-1sbtrzs-0 .sc-bxivhb').should('contain', 'Assinatura recorrente com cobrança automática');
  cy.get('.dUEQDY > .bdebad > .src__Box-sc-1sbtrzs-0 > .preco-plano > .preco-plano__valor').should('contain', '52,90');
  cy.get('#buttonMensal').should('contain', 'Quero plano mensal');
};
