/// <reference types="cypress" />
describe('page', () => {
  it('should configure visit headers', () => {
    cy.visit('https://example.cypress.io', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'My-Header': 'foo'
      }
    })
  })
})
