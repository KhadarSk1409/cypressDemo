import testData from '../fixtures/MPITestData.json'

class createUser{

    clickOnCreateUser(){
        return cy.get(':nth-child(1) > .btn').should('contain.text', ' Create User ').click();
    }

    getPageTitle(){
        return cy.get('h4.form-section');
    }

    enterFirstName(){
        return cy.get('input[name="firstName"]').type(testData.Fname);
    }

    enterLastName()
    {
        return cy.xpath('//input[@name="lastName"]').type(testData.Lname);
    }

    enterUserName(){
        return cy.get('input[name="userName"]').type(testData.Uname);
    }

    enterPassword(){
        return cy.xpath('//input[@name="password"]').type(testData.Pswd);
    }

    enterConfirmPaswd(){
        return cy.get('input[name="confirmpassword"]').type(testData.ConfirmPswd);
    
    }

    enterEmail(){
        return cy.get('input[name="email"]').type(testData.Email);
    }

    enterEmployeeId(){
        return cy.get('input[name="employeeId"]').type(testData.EmployeeId);
    }

    selectRole(){
        cy.get('#projectinput6').select('ZonalManager').should('have.value', 'ZonalManager')
    }

    enterDOJ(){
        cy.get('input[name="dateOfJoin"]')  // Use appropriate selector for your date field
            //.clear() //To clear the existing dates if any
            //.type('{selectall}') //To select all the date fields
            .type('2021-10-14');  // Replace with the desired date

    }

    enterContactNum(){
        cy.get('input[name="mobileNumber"]').type(testData.ContactNum);
    }

    enterAddress(){
        cy.get('input[name="address"]').type(testData.Address);
    }

    clickOnSave(){
        cy.get('.fa.fa-check-square-o').click();
    }

    clickOnCancel(){
        cy.get('.btn.btn-raised.btn-warning.mr-1').click();
    }

    clickOnBackButton(){
        cy.get('.btn.btn-raised.gradient-purple-bliss.white').click();
    }

}

export default new createUser();