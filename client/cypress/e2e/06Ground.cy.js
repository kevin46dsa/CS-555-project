describe('template spec', () => {
  it('visit Landing Page', () => {
    cy.visit('/')
    
  })
  it('Attempt to login', () => {
    cy.visit('/login')
    cy.get(".sign_in_form .input_wrap:nth-of-type(1) .input_field").type('groundtest@forcypress.com');
    cy.get(".sign_in_form .input_wrap:nth-of-type(2) .input_field").type('ground@123');
    cy.get(".sign_in_form .sign_btn").click();
  })
  it('OpenCustomerDashboard', () => {
    let firstheader = "ground team dashboard"
    cy.visit('/groundteamdashboard')
    cy.get(".font-semibold.leading-6.text-gray-900.text-lg").contains(firstheader)
    
  })
  
})

//groundtest@forcypress.com
//ground@123
//
