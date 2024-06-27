Cypress.Commands.add('login', () => {
    const login = () => {
        cy.visit('http://localhost:5173/')
  
        cy.get('#email').type('marco@gmail.com')
        cy.get('#password').type('marco123')
        cy.get('.SubmitButton').click()
}
  login()
})