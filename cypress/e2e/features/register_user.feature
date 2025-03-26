Feature: Register User
    Eu como cliente
    Quero me cadastrar
    Para fazer um pedido de compra e acompanhar meu pedido

    Background: Acess register page
        Given I am on register user screen

    Scenario: Cadastro com campo nome vazio
        When I click on Register
        Then I see the message "O campo nome deve ser prenchido" on register
    
    Scenario: Cadastro com campo email vazio
        And I fill my name
        When I click on Register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Cadastro com campo senha vazio
        And I fill my name
        And I fill my email
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register
    
    Scenario: Cadastro com senha inválida
        And I fill my name
        And I fill my email
        And I fill the password "1234"
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Cadastro com sucesso
        And I fill my name
        And I fill my email
        And I fill the password "123456"
        When I click on Register
        Then I see the sucess message
