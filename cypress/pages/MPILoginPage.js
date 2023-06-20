import testData from '../fixtures/MPITestData.json'

class LoginPage {
    visit() {
        cy.visit(testData.url);
    }
    getPageTitle(){

        return cy.get('.card-title');

    }
    enterUserName(){
        cy.get('#inputEmail').type(testData.userName);
    }
    enterPassword(){
        cy.get('#inputPass').type(testData.password);
    }
    clickOnSubmit(){
        cy.get('button[type="submit"]').click();
    }
    clickOnProfileDropDwon(){
        cy.get('#dropdownBasic3').click();
    }
    clickOnLogoutButton(){
        cy.get('a[class="dropdown-item"] span').click();
    }
}

export default new LoginPage();