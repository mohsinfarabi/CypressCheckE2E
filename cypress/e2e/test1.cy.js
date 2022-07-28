it('Google Search', () => {
    cy.visit('https://www.google.com')

    cy.get('.gLFyf').type('Automation step by step{enter}')

    //cy.contains('Goggle Search').click()
});