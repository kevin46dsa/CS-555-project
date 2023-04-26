describe('template spec', () => {
  it('visit Landing Page', () => {
    cy.visit('/')
    
  })
  it('Attempt to login', () => {
    cy.visit('/login')
    cy.get(".sign_in_form .input_wrap:nth-of-type(1) .input_field").type('testemail@forcypress.com');
    cy.get(".sign_in_form .input_wrap:nth-of-type(2) .input_field").type('testemail@1234');
    cy.get(".sign_in_form .sign_btn").click();
  })
  
  it('OpenCustomerDashboard', () => {
    let firstheader = "Personal Information"
    cy.visit('/customerdashboard')
    cy.get("div:nth-of-type(1) > .font-semibold.leading-7.text-base.text-gray-900").contains(firstheader)
    
  })
  /*
  it('Signout', () => {
    let Signout = "Sign out"
    cy.visit('/customerdashboard')
    cy.get(".h-5.ml-2.text-gray-400.w-5").click();
    cy.get("[role='menuitem']").contains(Signout)
    cy.get("[role='menuitem']").click();
  })
  */
})


