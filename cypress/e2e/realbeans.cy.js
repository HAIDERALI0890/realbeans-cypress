const STORE_URL = 'https://r0960013-realbeans-onwvdzf4.myshopify.com'
const PASSWORD = 'skupri'

function unlock() {
  cy.visit(STORE_URL)
  cy.get('body').then(($body) => {
    if ($body.find('input[type="password"]').length > 0) {
      cy.get('input[type="password"]').type(PASSWORD)
      cy.get('button[type="submit"]').click()
      cy.wait(2000)
    }
  })
}

describe('RealBeans Shopify Store', () => {
  it('homepage shows intro text', () => {
    unlock()
    cy.contains('Since 1801').should('be.visible')
  })

  it('homepage shows product list', () => {
    unlock()
    cy.contains('Roasted coffee beans 5kg').should('exist')
    cy.contains('Blended coffee 5kg').should('exist')
  })

  it('catalog page shows correct products', () => {
    unlock()
    cy.visit(STORE_URL + '/collections/all')
    cy.contains('Roasted coffee beans 5kg').should('exist')
    cy.contains('Blended coffee 5kg').should('exist')
  })

  it('product detail page shows correct info', () => {
    unlock()
    cy.visit(STORE_URL + '/products/roasted-coffee-beans-5kg')
    cy.contains('Our best and sustainable real roasted beans').should('be.visible')
    cy.contains('40').should('exist')
  })

  it('About page shows history paragraph', () => {
    unlock()
    cy.visit(STORE_URL + '/pages/about')
    cy.contains('From a small Antwerp grocery').should('be.visible')
  })
})