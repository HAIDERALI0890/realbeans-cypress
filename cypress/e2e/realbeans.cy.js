const STORE_URL = 'https://r0960013-realbeans-onwvdzf4.myshopify.com'

describe('RealBeans Shopify Store', () => {
  it('homepage shows intro text', () => {
    cy.visit(STORE_URL)
    cy.contains('Since 1801').should('be.visible')
  })

  it('homepage shows product list', () => {
    cy.visit(STORE_URL)
    cy.contains('Roasted coffee beans 5kg').should('exist')
    cy.contains('Blended coffee 5kg').should('exist')
  })

  it('catalog page shows correct products', () => {
    cy.visit(STORE_URL + '/collections/all')
    cy.contains('Roasted coffee beans 5kg').should('be.visible')
    cy.contains('Blended coffee 5kg').should('be.visible')
  })

  it('product detail page shows correct info', () => {
    cy.visit(STORE_URL + '/products/roasted-coffee-beans-5kg')
    cy.contains('Our best and sustainable real roasted beans').should('be.visible')
    cy.contains('40').should('exist')
  })

  it('About page shows history paragraph', () => {
    cy.visit(STORE_URL + '/pages/about')
    cy.contains('From a small Antwerp grocery').should('be.visible')
  })
})