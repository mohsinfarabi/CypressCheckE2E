import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests',()=>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')    
    })
    it('Login with valid credentials', () => {
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
        cy.get('#welcome').click()

        cy.screenshot('successful login')
    
    })
    
    it('Login with invalid username', () => {
    
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
        cy.screenshot('invalid credentials')

        cy.get('#welcome').click()
    
    })
})
