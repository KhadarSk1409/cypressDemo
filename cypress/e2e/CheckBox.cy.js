
import testData from '../fixtures/testData.json'

describe('Test suite to validate checkboxes', () => {

    beforeEach('Navigating to Url', () => {
        cy.visit(testData[1].url); //Navigating to url itera qa website

    })

it('To check select and deselect all the checkboxes on UI', () => {

    //Checking and unchecking all the checkboxes at a time
    cy.get('.form-check-input[type="checkbox"]')
        .should('not.be.checked') //Verify that all the checkboxes are unchecked by default
        .check()                  //Check all the checkboxes
        .should('be.checked')     //Verify that all the checkboxes are checked

})


it('To check the first and last checkbox and verify those are checked', () =>{
    cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked'); //First checkbox

    cy.get('#monday').should('be.checked');
    
    cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked'); //Last checkbox

})
   

})
