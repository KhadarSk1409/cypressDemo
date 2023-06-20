
import testData from '../fixtures/testData.json' //importing json and assigning it to an object

describe('Test suite to validate dropdowns functionality', () => {

    beforeEach('Navigating to Url', () => {
        cy.visit(testData[2].url); //Navigating to rediff website

    })

    it('Selecting dropdown element based on Value', () => {

        cy.get("select[id=country]").select("16") //Selecting the country based on value
        cy.get("select[id=country]").contains('Bahrain');

        //Alternatively
        cy.get("select[id=country]").select("3").contains('American Samoa');
        
    })

    it('Selecting dropdown element based on Text', () => {

        cy.get("select[name*='city']").select('Bhopal')  //Handling dropdown whose value constantly changes (dynamic)
        .contains('Bhopal');
        
    })


    it('Selecting dropdown element based on Index', () => {
        cy.get("select[id=country]").select(2).contains('Andorra'); //Selecting based on Index

    })


})
