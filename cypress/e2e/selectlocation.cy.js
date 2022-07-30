import {LandingPage} from "./pages/bm_landingpage"

const landingPage = new LandingPage()

describe('Should Select Test Area Delivery Location',()=>{

    beforeEach(()=>{
        cy.visit('https://www.bengalmeat.com') 
    })
    it('Select Test Area as Delivery Location', () => {

        landingPage.selectCity()
        landingPage.selectDhaka()
        landingPage.selectArea()
        landingPage.selectTestArea()
        cy.wait(3000)
        landingPage.clickConfirm()

    });
})
