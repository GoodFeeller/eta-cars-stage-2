import { getCoinReqest, mainPageRequest } from "../intercept-answers/answers"

describe('Buy coin test', () => {
  let price: string
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/trpc/coin.getPopularCoins,coin.getAll?batch=1&input=%7B%221%22%3A1%7D'
    },
    mainPageRequest
    )
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/trpc/coin.getCoin?batch=1&input=%7B%220%22%3A%22bitcoin%22%7D'
    },
    getCoinReqest
    )
    cy.visit('/')
    cy.get('button').contains('ADD').as('btn')
    cy.get('@btn')
      .parents()
      .children()
      .eq(3)
      .then((e) => (price = e.text()))
  })
  it('Successful buy', () => {
    cy.get('@btn').click()
    cy.get('input[name=Count]').type('1')
    cy.get('button').contains('Buy').click()
    cy.get('span')
      .contains('TotalPrice')
      .should('contain.text', `TotalPrice: ${price}`)
    cy.clearAllLocalStorage()
    cy.get('@btn').parent().click()
    cy.get('button').contains('ADD').click()
    cy.get('input[name=Count]').type('1')
    cy.get('button').contains('Buy').click()
    cy.get('span')
      .contains('TotalPrice')
      .should('contain.text', `TotalPrice: ${price}`)
  })
})
