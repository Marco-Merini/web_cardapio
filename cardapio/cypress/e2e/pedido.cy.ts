describe('pedido', () => {
  beforeEach(() => {
    cy.login()
  });
  it('fazer pedido', () => {
    cy.get(':nth-child(1) > .add-cart > button').click()
    cy.get(':nth-child(2) > .add-cart > button').click()
    cy.get(':nth-child(3) > .add-cart > button').click()
    cy.get('.cart-icon').click()
    cy.get('.btn').click()
    cy.contains('Seu pedido foi realizado com sucesso!').should('be.visible')
  })
})