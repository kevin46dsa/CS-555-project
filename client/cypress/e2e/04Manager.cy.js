describe('template spec', () => {
  it('visit Landing Page', () => {
    cy.visit('/')
    
  })
  it('Attempt to login', () => {
    cy.visit('/login')
    cy.get(".sign_in_form .input_wrap:nth-of-type(1) .input_field").type('managertest@forcypress.com  ');
    cy.get(".sign_in_form .input_wrap:nth-of-type(2) .input_field").type('manager@123');
    cy.get(".sign_in_form .sign_btn").click();
  })
  it('OpenCustomerDashboard', () => {
    let firstheader = "Manager Dashboard"
    cy.visit('/managerdashboard')
    
    
  })
  
})


// managertest@forcypress.com     
//manager@123
//fQesP7uT2gcGXiTMp7TFWVLhPsh1
