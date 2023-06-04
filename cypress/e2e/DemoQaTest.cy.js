
import testData from '../fixtures/demoQATestData.json' //Instead of hard coding the url, credential saving them in a json file and getting form there

describe('Cypress Practice on a Demo QA Website', ()=>{

    before('Launch the application', ()=>{
        cy.log('Application is about to launch');
    })

    beforeEach('Application Login Page', ()=>{
        cy.visit(testData.url); //Get the url from the json file and navigate to the Login Page
        cy.get('h2').should('have.text', 'Test login'); //Verify the Page title
        cy.get('#username').type(testData.userName); //Enter the username
        cy.get('#password').type(testData.password); //Enter the password
        cy.xpath('//button[@id="submit"]').click(); //Click on Submit
    })

    it('Verify Login Functionality', ()=>{
        cy.get('h1').should('contain.text', 'Logged In Successfully');
        cy.get('.post-content').should('contain.text', 'Congratulations student. You successfully logged in!'); //Verify the login page title
       
    })

    it('Verify Logout Functionality', ()=>{
        cy.get('.post-content a').should('have.text', 'Log out').click(); //Asserting and Clicking on Logout button
        cy.get('h2').should('have.text', 'Test login'); //Verifying the login title after clciking on logout
    })

    afterEach('Cookies will be deleted after each test', ()=>{
        cy.log('Test is completed');
    })

    after('Deleting cookies after all the tests', ()=>{
        cy.log('Deleting cookies after all the tests');
        cy.clearCookies();

    })

})