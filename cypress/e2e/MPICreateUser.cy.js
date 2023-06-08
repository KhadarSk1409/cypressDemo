import MPILoginPage from '../pages/MPILoginPage'
import MPIUsersPage from '../pages/MPIUsersPage'
import MPICreateUser from '../pages/MPICreateUser'


describe('Create a new User', ()=>{

    beforeEach('Log in', ()=>{
        MPILoginPage.visit();
        MPILoginPage.enterUserName();
        MPILoginPage.enterPassword();
        MPILoginPage.clickOnSubmit();
        MPILoginPage.getPageTitle().should('contain.text', 'PRODUCTS SALES');

         //Click on Users Tab
         MPIUsersPage.clickOnUsersTab();
         MPIUsersPage.getPageTitle().should('contain.text', 'User List');
    })

    it('Create User without checking any error validation', ()=>{

        //Create a new user
        MPICreateUser.clickOnCreateUser();
        MPICreateUser.getPageTitle().should('contain.text', ' User Create ');
        MPICreateUser.enterFirstName();
        MPICreateUser.enterLastName();
        MPICreateUser.enterPassword();
        MPICreateUser.enterConfirmPaswd();
        MPICreateUser.enterEmail();
        MPICreateUser.enterEmployeeId();
        MPICreateUser.selectRole();
        MPICreateUser.enterDOJ();
        MPICreateUser.enterContactNum();
        MPICreateUser.enterAddress();
        MPICreateUser.clickOnSave(); //Details not getting saved
        MPICreateUser.clickOnCancel();
    })

    it('Checking Error Validations in the input fields during the new user cre ation', ()=>{

        MPICreateUser.clickOnCreateUser();
        MPICreateUser.getPageTitle().should('contain.text', ' User Create ');
        MPICreateUser.enterFirstName().type('{selectAll}').clear();
        cy.get('.error-text').should('contain.text', ' First Name is required ');
        MPICreateUser.enterFirstName();
        MPICreateUser.enterLastName().type('{selectAll}').clear();
        cy.get('.error-text').should('contain.text', ' Last Name is required ');
        MPICreateUser.enterLastName();
        MPICreateUser.enterEmployeeId().type('{selectAll}').clear();
        cy.get('.error-text').should('contain.text', ' Employee ID is required ');
        MPICreateUser.clickOnCancel();
    })

})