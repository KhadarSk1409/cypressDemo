import MPILoginPage from '../pages/MPILoginPage'
import MPIUsersPage from '../pages/MPIUsersPage'
import MPICreateUser from '../pages/MPICreateUser'

describe('Create a new User', ()=>{

    it('Create User', ()=>{
        MPILoginPage.visit();
        MPILoginPage.enterUserName();
        MPILoginPage.enterPassword();
        MPILoginPage.clickOnSubmit();
        MPILoginPage.getPageTitle().should('contain.text', 'PRODUCTS SALES');
        
        //Click on Users Tab
        MPIUsersPage.clickOnUsersTab();
        MPIUsersPage.getPageTitle().should('contain.text', 'User List');

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

})