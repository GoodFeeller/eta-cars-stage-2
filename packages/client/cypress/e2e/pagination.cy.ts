import { mainPageRequest } from "../intercept-answers/answers"

describe('Pagination test', () => {
  it('Pagination_work', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://eta-cars-internship-api.onrender.com/trpc/coin.getPopularCoins,coin.getAll?batch=1&input=%7B%221%22%3A1%7D'
    },
    mainPageRequest
    )
    cy.visit('/')
    cy.window().scrollTo('bottom')
    cy.get('tbody>tr').should('have.length.gt', 21)
  })
})
