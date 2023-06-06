class UsersPage{

    clickOnUsersTab(){

        cy.get('[ng-reflect-router-link="/list/users"] > a').click({force: true}); //When the element is not interactable, use {force: true} to pass all the error/animations
    }

    getPageTitle(){

        return cy.get('.card-title');

    }
}

export default new UsersPage();