describe('template spec', () => {
  it('visit error page', () => {
    cy.visit('/error')
  })
  it('visit unauthorised dashboard', () => {
    cy.visit('/customerdashboard')
  })
  
})

