/// <reference types ="cypress"/>

export default{
    acessarLoginPage(){
        cy.visit('/')
        .get('#top_header')
        .should('be.visible')
        cy.get('.top_header_right').contains('Login')
        .click()
    },
    acessRegisterUserPage(){
        cy.visit('/')
        .get('#top_header')
        .should('be.visible')
        cy.get('.top_header_right').contains('Cadastro')
        .click()
    }
}