describe('template spec', () => {
  it('visit Landing Page', () => {
    cy.visit('/')
    
  })
  it('Attempt to login', () => {
    cy.visit('/login')
    cy.get(".sign_in_form .input_wrap:nth-of-type(1) .input_field").type('Salestest@forcypress.com');
    cy.get(".sign_in_form .input_wrap:nth-of-type(2) .input_field").type('Sales@123');
    cy.get(".sign_in_form .sign_btn").click();
  })
  it('OpenSalesDashboard', () => {
    let firstheader = "Sales Dashboard"
    cy.visit('/salesdashboard')
    
    
  })
  
})


//Salestest@forcypress.com
//Sales@123

//MmAPB8RjAHZeiIizaTJO94D26kh1
