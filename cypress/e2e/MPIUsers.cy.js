//Import the required page objects and files for the test
import MPILoginPage from '../pages/MPILoginPage'
import MPIUsersPage from '../pages/MPIUsersPage'

describe('Verify MPI Users Page and the User Table', ()=>{

    it('Verify elements in the Users page', ()=>{
        MPILoginPage.visit();
        MPILoginPage.enterUserName();
        MPILoginPage.enterPassword();
        MPILoginPage.clickOnSubmit();
        MPILoginPage.getPageTitle().should('contain.text', 'PRODUCTS SALES');
        
        //Click on Users Tab
        MPIUsersPage.clickOnUsersTab();
        MPIUsersPage.getPageTitle().should('contain.text', 'User List');

            //Verify the available table
            cy.get('table tbody tr').then(($ele)=>{
    
                //Number of rows
                const rowCount = $ele.length;
                cy.log("Total rows in the table are: " +rowCount);
    
            })
    
            cy.get("table > thead > tr > th").then(($col)=>{
    
                //Number of columns
                const colCount = $col.length;
                cy.log("The total columns in the table are: " +colCount);
            })
    
    })

})