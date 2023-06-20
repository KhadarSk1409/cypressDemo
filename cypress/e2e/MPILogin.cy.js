
import MPILoginPage from '../pages/MPILoginPage';

describe('MPI Login', ()=>{

    beforeEach('Launch the application and Login', ()=>{
        MPILoginPage.visit();
      
    });

    it('should log in successfully', () => {
        MPILoginPage.enterUserName();
        MPILoginPage.enterPassword();
        MPILoginPage.clickOnSubmit();
        cy.wait(2000);
        MPILoginPage.getPageTitle().should('contain.text', 'PRODUCTS SALES');
        MPILoginPage.clickOnProfileDropDwon(); //Click on profile
        MPILoginPage.clickOnLogoutButton(); //Click on logout
      
        cy.get('.white').should('have.text', 'Login'); //Verify the login header after logged out
        cy.log('Logged out successfully');
    })

})