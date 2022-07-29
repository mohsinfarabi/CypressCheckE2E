import {LandingPage} from "./pages/bm_landingpage"

const landingPage = new LandingPage()

describe('Should Select Test Area Delivery Location',()=>{

    beforeEach(()=>{
        cy.visit('https://www.bengalmeat.com') 
    })
    it('Select Test Area as Delivery Location', () => {
        
        // cy.get(':nth-child(1) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click({force:true})
        // cy.get('#react-select-2-option-0').click({force:true})
        // cy.get(':nth-child(2) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click({force:true})
        // //cy.get(':nth-child(2) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('Test Area',{force:true}).type('{enter}')
        // cy.get('#react-select-3-option-76').click({force:true})
        // //cy.get('.highlight').click({force:true})
        // cy.wait(5000)
        // cy.contains('Confirm').click({force:true})
        //cy.log(cy.contains('Test Area'))

        landingPage.selectCity()
        landingPage.selectDhaka()
        landingPage.selectArea()
        landingPage.selectTestArea()
        cy.wait(3000)
        landingPage.clickConfirm()

    });
})
