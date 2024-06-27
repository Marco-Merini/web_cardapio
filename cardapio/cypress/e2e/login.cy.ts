describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  });
  it('sucesso', () => {
    cy.get('#email').type('marco@gmail.com')
    cy.get('#password').type('marco123')
    cy.get('.SubmitButton').click()
    cy.contains('Todos').should('be.visible')
    
  })

  it('incorreto', () => {
    cy.get('#email').type('errado@errado.com')
    cy.get('#password').type('errado')
    cy.get('.SubmitButton').click()
    cy.contains('Email ou senha incorretos. Por favor, tente novamente.').should('be.visible')
  });
})