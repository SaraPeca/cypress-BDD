///<reference types="cypress"/>

export default{
    fillName(name){
        cy.get('#user')
        .should('be.visible')
        .type(name)
    },
    fillEmail(email){
        cy.get('#email')
        .should('be.visible')
        .type(email)
    },
    fillPassword(password){
        cy.get('#password')
        .should('be.visible')
        .type(password)
    },
    clickRegister(){
        cy.get('#btnRegister')
        .should('be.visible')
        .click()
    },
    checkMessageError(message){
        cy.get('.errorLabel')
        .should('be.visible')
        .should('have.text',message)
    },
    checkMessageSucess(nome){
        cy.get('#swal2-title')
        .should('have.text',"Cadastro realizado!")
        cy.get('#swal2-html-container')
        .should('have.text',`Bem-vindo ${nome}`) 
    }

}