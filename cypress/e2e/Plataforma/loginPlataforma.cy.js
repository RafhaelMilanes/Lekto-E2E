/// <reference types="cypress"/>

describe("Login Plataforma.Stg", () => {
  before("Acessar Aplicação Plataforma", () => {
    cy.visit('/')
      cy.loginPlataforma(Cypress.env('EmailPlat'), Cypress.env('PasswordPlat'));
  });

  it("Deve selecionar a trilha EI - 4 anos", function() {
      cy.get('[href="/classes"]').click();
      cy.get(':nth-child(8) > .css-2mory5 > .css-102fta5 > .sc-jegxcv').click()

      cy.get('.css-j0ozid > .sc-jegxcv').click();
      cy.get('.css-1x0l3fe > .MuiTypography-root').should('contain', "Trilhas disponíveis");

      cy.get(':nth-child(1) > .css-7ud10a > .MuiTypography-root').should('contain', "Construindo relações de afeto com a natureza: Narrativas sobre os Oceanos. 1.11.1");

      cy.get(':nth-child(1) > .css-1567tvh > .css-2u63hz > :nth-child(2)').click();
      cy.get(':nth-child(1) > .css-w2undo > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()

      cy.get('.MuiDayPicker-monthContainer > :nth-child(4) > :nth-child(6)').click()

      cy.get('.dofxlB').click()

      cy.get('.kOFdTE').click()

      cy.get('.css-1rsumxx > .MuiTypography-root').should('contain', "Alterações realizadas com sucesso")

      cy.get('.css-96ddy2').click()


      cy.get(':nth-child(3) > .css-rn36lp > .css-115k9co > .sc-jegxcv').click()
      cy.get('.css-1qfd4ix > .sc-jegxcv').click()
      cy.get('.kOFdTE').click()

    });
});
