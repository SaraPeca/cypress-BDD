///<reference types="cypress"/>
import home_page from "../pages/home_page"
import register_user_page from "../pages/register_user_page"
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import { faker } from "@faker-js/faker"

const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()

Given('I am on register user screen',() =>{
    home_page.acessRegisterUserPage()
})

Given('I fill my name',()=>{
    register_user_page.fillName(randomName)
})

Given('I fill my email',()=>{
    register_user_page.fillEmail(randomEmail)
})

Given('I fill the password {string}',(password)=>{
    register_user_page.fillPassword(password)
})

When('I click on Register', () =>{
    register_user_page.clickRegister()
})

Then('I see the message {string} on register', (message) =>{
    register_user_page.checkMessageError(message)
})

Then('I see the sucess message',() =>{
    register_user_page.checkMessageSucess(randomName)
})