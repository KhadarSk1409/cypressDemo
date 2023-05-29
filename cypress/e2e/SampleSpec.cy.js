

describe('template spec', function() {

  it('sample passes', function () {
    cy.visit('https://example.cypress.io')
    cy.wait(6000)
    cy.get('#navbar > ul:nth-child(1) > li:nth-child(3) > a');
  })

  it('sample assertion', () =>{
    cy.visit('https://example.cypress.io')
    cy.get('h2').should('have.text', 'CommandsUtilitiesCypress API');
  })

  it('sample click', function () {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > ul:nth-child(1) > li:nth-child(2) > a').click()
    cy.get('h1').should('have.text','Utilities');
  })

})
