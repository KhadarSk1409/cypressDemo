
describe('Test Suite to locate the elements in different ways using CYPRESS', ()=>{

    it('Identifying the elements using CSS - ID', ()=>{
        cy.visit('https://demo.applitools.com/');
        cy.get('#username').type('KhadarBasha'); //Enter username
        cy.get('#password').type('Test@123'); //Enter password
        cy.get('#log-in').click(); //Click on login
        cy.get('.compact > h6.element-header').should('contain.text', 'Financial Overview') //Verify the page Header
    })

    it('Identifying the elements using CSS - CLASS', ()=>{
        cy.visit('https://demo.applitools.com/');
        cy.get('.form-control').eq(0).should('have.attr', 'placeholder', 'Enter your username').type('NasirAhmed');
        cy.get('.form-control').eq(1).should('have.attr', 'placeholder','Enter your password').type('Test@123');
        cy.get('.btn-primary').click();
        cy.get('.compact.pt-4 > h6.element-header').should('contain.text', 'Financial Overview')
    })

    it('Identifying the elements using CSS - TAG & ATTRIBUTE', ()=>{
        cy.visit('https://demo.applitools.com/');
        cy.get('input[type="text"]').type('KhadarBasha');
        cy.get('input[type="password"]').type('Test@123');
        cy.get('#log-in').click();
        cy.get('.compact.pt-4 > h6.element-header').should('contain.text', 'Financial Overview')
     })

     it('Identifying the elements using CSS - CLASS & ATTRIBUTE',()=>{
        cy.visit('https://demo.applitools.com/');
        cy.get('.form-control[placeholder="Enter your username"]').type('Sk Khadhar Basha');
        cy.get('.form-control[placeholder="Enter your password"]').type('Test@123');
        cy.get('#log-in').click();
        cy.get('.compact.pt-4 > h6.element-header').should('contain.text', 'Financial Overview')
     })

     it('Identifying the elements using XPATH in Cypress', ()=>{
        cy.visit('https://demo.applitools.com/');
        cy.xpath('//input[@id="username"]').type('Sk Nasir Ahmed');
        cy.xpath('//input[@id="password"]').type('Test@123');
        cy.xpath('//a[@id="log-in"]').click();
        cy.get('.compact > .element-header').should('contain.text', 'Financial Overview')
        cy.xpath('//tbody/tr').should('have.length',6); //Verify the table size
     })
})