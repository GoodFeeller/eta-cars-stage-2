import { mainPageRequest } from "../intercept-answers/answers"

describe('Coin page open test', () => {
  it('Page open successful', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://eta-cars-internship-api.onrender.com/trpc/coin.getPopularCoins,coin.getAll?batch=1&input=%7B%221%22%3A1%7D'
    },
    mainPageRequest
    )
    cy.visit('/')
    cy.get('tbody>tr').eq(0).click()
    cy.url().should('include', '/coin/')
  })
})

describe('Popular coin page open test', () => {
  it('Page open successful', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://eta-cars-internship-api.onrender.com/trpc/coin.getPopularCoins,coin.getAll?batch=1&input=%7B%221%22%3A1%7D'
    },
    mainPageRequest
    )
    cy.visit('/')
    cy.get('header>div')
      .eq(1)
      .within(() => {
        cy.get('div>img').eq(0).click()
      })
    cy.url().should('include', '/coin/')
  })
})
