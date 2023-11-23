import { coinPageReuest } from "../intercept-answers/answers"

describe('Back button on coin page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/trpc/coin.getPopularCoins,coin.getCoin?batch=1&input=%7B%221%22%3A%22bitcoin%22%7D'
    },
    coinPageReuest
    )
    cy.visit('/coin/bitcoin')
  })
  it('Back button is working!', () => {
    cy.get('a').contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})
