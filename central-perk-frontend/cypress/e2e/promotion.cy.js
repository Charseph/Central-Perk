describe('Promotion Component', () => {
  beforeEach(() => {
    cy.visit('/promotion'); 
  });

  it('should display the Promotion component', () => {
    cy.contains('Send Promotion').should('be.visible');
  });

  it('should allow entering a promotion message', () => {
    const promotionMessage = 'This is a test promotion message.';
    cy.get('.ql-editor').type(promotionMessage);
    cy.get('.ql-editor').should('contain.text', promotionMessage);
  });

  it('should show error when no customers are selected', () => {
    cy.get('button').contains('Send Promotion').click();
    cy.contains('Please select at least one customer to send the promotion!').should('be.visible');
  });

  it('should allow cancelling the message', () => {
    const promotionMessage = 'This is a test promotion message.';
    cy.get('.ql-editor').type(promotionMessage);
    cy.get('button').contains('Cancel').click({ force: true });
    cy.get('.ql-editor').should('have.text', '');
  });
});
