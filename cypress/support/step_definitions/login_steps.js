// 2- transformar Gherkin em método/ação
/// <reference types="cypress"/>
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import { faker } from "@faker-js/faker"

const randomEmail = faker.internet.email()

Given('I am on login screen', ()=>{
    home_page.acessarLoginPage()
})
Given('I fill e—mail', ()=>{
    login_page.fillEmail(randomEmail)
})
Given('I fill my credencials', () =>{
    login_page.fillEmail(randomEmail)
    login_page.fillPasswor('123456')
})

When('I click on Login',()=>{
    login_page.clickLogin()
})
Then('I see the message {string}', (message)=>{
    login_page.checkMessageError(message)
})
Then('I see success message',() =>{
    login_page.checkMessageSucess(randomEmail)
})