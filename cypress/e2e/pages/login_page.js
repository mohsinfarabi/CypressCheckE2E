export class LoginPage{

    username_textbox = '#txtUsername'
    password_textbox = '#txtPassword'
    login_button = '#btnLogin'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)    
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }
}