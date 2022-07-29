export class LandingPage{

    city_selector = ':nth-child(1) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql'
    dhaka_select = '#react-select-2-option-0'
    area_selector = ':nth-child(2) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql'
    testarea_select =  '#react-select-3-option-76'
    confirm_button = 'Confirm'

    selectCity(){
        cy.get(this.city_selector).click({force:true})    
    }

    selectDhaka(){
        cy.get(this.dhaka_select).click({force:true})

    }

    selectArea(){
        cy.get(this.area_selector).click({force:true})
    }

    selectTestArea(){
        cy.get(this.testarea_select).click({force:true})

    }
    clickConfirm(){
        cy.contains(this.confirm_button).click({force:true})
    }
}