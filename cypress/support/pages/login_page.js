// 3- Criar as ações da página
/// <reference types ="cypress"/>

export default{
    fillEmail(email){
        cy.get('#user')
        .should('be.visible')
        .type(email)
    },
    fillPasswor(password){
        cy.get('#password')
        .should('be.visible')
        .type(password)
    },
    clickLogin(){
        cy.get('#btnLogin')
        .should('be.visible')
        .click()
    },
    checkMessageError(message){
        cy.get('.invalid_input')
        .should('have.text',message)
    },
    checkMessageSucess(email){
        cy.get('#swal2-title')
        .should('have.text', 'Login realizado')
        cy.get('#swal2-html-container')
        .should('have.text',`Olá, ${email}`)
    }
}