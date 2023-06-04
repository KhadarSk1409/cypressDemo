describe('Different Assertions Test Suite', ()=>{

    //Before Hook
    before('Implementing Before Hook', ()=>{
        cy.log('Application is about to launch');

    })

    beforeEach('Navigating to the application', ()=>{
        cy.visit('https://demo.applitools.com/');
        cy.get('input[type="text"]').type('KhadarBasha');
        cy.get('input[type="password"]').type('Test@123');
        cy.get('#log-in').click();
    })
       
    it('Test to demo Assertion - Expect', ()=>{

        //Store the element in $ele to use at different places to assert
        cy.get('#time').then(($ele) =>{

        expect($ele).to.have.text('Your nearest branch closes in: 30m 5s')

        expect($ele).to.have.css("color","rgb(255, 0, 0)"); //RGB value for red color

        })
    })

    it('Test to demo Assertion using Should & Chainable and', ()=>{

        cy.get('#time').should("have.text", "Your nearest branch closes in: 30m 5s")
        .and("have.css", "color", "rgb(255, 0, 0)").and("have.css", "font-size", "24px"); //Validating mutliple things like Text, Color, Font-Size at once
    })

    it('Test to demo Assertion using AAA Pattern and Assert Function', ()=>{
        //Arrange: Launch and Login the application
        //Action: Performing actions like clicking
        //Assert: Validating the response

        //1. Without JQuery object
        cy.get('.compact.pt-4 > h6.element-header').then((headerElement)=>{
            assert.equal(headerElement.text().trim(), "Financial Overview");
        })

       cy.get('.logged-user-name').then(($userEle)=>{

        const uName = "Jack Gomez";
        const userEleTxt = $userEle.text().trim();
        assert.equal(uName, userEleTxt);
       })
    })

    afterEach('Cookies will be deleted after each test', ()=>{
        cy.log('Test is completed');
    })

     //After Hook
     after('Deleting cookies after all the tests', ()=>{
        cy.log('Deleting cookies after all the tests');
        cy.clearCookies();

    })

})