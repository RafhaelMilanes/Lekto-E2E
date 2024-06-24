/// <reference types="cypress"/>

describe("Login Admin.Stg", () => {

  it("Deve preencher os campos de Login e Senha e entrar no Admin", function () {
    cy.visit("https://login.stg.lekto.com.br/?returnUrl=https:%2F%2Fadmin.stg.lekto.com.br%2F")

    cy.get('#username').type(Cypress.env('EMAIL'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('.ant-btn').click()
      
    cy.url().should('eq', 'https://admin.stg.lekto.com.br/')
    
    cy.visit('https://admin.stg.lekto.com.br/')
  });
});