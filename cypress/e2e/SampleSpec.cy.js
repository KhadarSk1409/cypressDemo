

describe('template spec', function() {

  it('sample passes', function () {
    cy.visit('https://example.cypress.io')
    cy.wait(6000)
    cy.get('#navbar > ul:nth-child(1) > li:nth-child(3) > a')
    cy.get('h2').should('have.text', 'CommandsUtilitiesCypress API');
    
  })

  it('sample fails', () =>{
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('have.text', 'Xyz');
  })
})
