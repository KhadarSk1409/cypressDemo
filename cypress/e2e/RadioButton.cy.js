import testData from '../fixtures/testData.json'

describe('Test suite to validate radio buttons', () => {

    beforeEach('Navigating to Url', () => {
        cy.visit(testData[1].url); //Navigating to url itera qa website

    })

    it('Get the total radio buttons', () => {

        //To chek number of radio buttons present on the page:
         cy.get('input[type="radio"]').then(($ele) => {  //Using common locator for all radio buttons
             let num = $ele.length;
             cy.log ("Total number of radio buttons on the UI is: "+num);   
           
         });   
    })


    it('Use of check method for radio btns', () =>{

         // check a radio button
         cy.get('input#male').should('be.enabled').check(); //Check method
         cy.get('input#female').should('be.enabled').and('not.be.checked');  //When male radio btn is checked, female radio btn should be enabled but not checked
 
         //Now, trying the reverse scenario:
         cy.get('input#female').should('be.enabled').check(); //Check the radio btn female
         cy.get('input#male').should('be.enabled').and('not.be.checked');
 
         //Usage of first() method
         cy.get('input#male').check(); //Again check the male radio btn
         cy.get('input[name="optionsRadios"]').first().check(); //Now, check the fist radio button in the category, which is female
         cy.get('input#female').should('be.checked');
 
         //Check some radio button is not enabled or able to check, force check
         cy.get('input#other').should('not.be.enabled');
         cy.get('input#other').check({force:true});  //Cypress provides this force check for disabled radio btn feature. It ignores whether element is enabled
         cy.get('input#other').should('be.checked');


         cy.get('input#female').should('be.enabled').check(); //Check the radio btn female
         cy.get('input#male').should('be.enabled').and('not.be.checked');
    })


    it('To check radio button state and take respective actions', () => {

        cy.get('input[name="optionsRadios"]').each(($radioEle) => {  //Radio buttons specific to form - notice the use of each for looping

            const btnIdValue = $radioEle.attr('id'); //Assign the id value of radio btn to a variable

            if($radioEle.is(":enabled")){
                cy.log(btnIdValue+" is enabled");
                cy.wrap($radioEle).click(); //Wrap yields the object on which you want to perform the action
            }
            else{
                cy.log(btnIdValue+" is disabled");
            }
        })
    })
    


})