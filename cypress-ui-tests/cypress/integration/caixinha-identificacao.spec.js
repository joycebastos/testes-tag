describe('Escolher caixinha', () => {
  beforeEach('Acessar URL da caixinha', () => {
    cy.url();
  });

  context('Preencher dados pessoais', () => {
    it('Dados pessoais caixinha tag curadoria preenchidos com sucesso', () => {
      cy.tagCuradoriaAnual();
      cy.get('#email').type('joyce.csb@gmail.com');
      cy.get('#nome').type('Joyce Bastos');
      cy.get('#cpf').type('37600136007');
      cy.get('#telefone').type('519888776655');
      cy.get('#proximo').click();
    });

    it('Campo CPF inválido', () => {
      cy.tagCuradoriaAnual();
      cy.get('#email').type('joyce.csb@gmail.com');
      cy.get('#nome').type('Joyce Bastos');
      cy.get('#cpf').type('376001360');
      cy.get('.label__text--error').should('contain', 'CPF inválido');
    });

    it('Clicar no botão voltar', () => {
      cy.tagCuradoriaAnual();
      cy.get('#voltar').click();
    });
  });
});