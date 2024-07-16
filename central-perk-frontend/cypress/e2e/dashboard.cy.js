describe('Dashboard Component', () => {
  beforeEach(() => {
    cy.visit('/'); // Assuming your Dashboard component is rendered at '/'
  });

  it('should display Dashboard title correctly', () => {
    cy.get('h4').should('contain.text', 'Dashboard');
  });

  it('should display Points Earned tabs correctly', () => {
    cy.get('[aria-label="points tabs"]')
      .should('be.visible')
      .within(() => {
        cy.get('button').should('have.length', 3); // Three tabs: Today, Last 7 Days, Last 30 Days
        cy.contains('Today').should('be.visible');
        cy.contains('Last 7 Days').should('be.visible');
        cy.contains('Last 30 Days').should('be.visible');
      });
  });

  it('should switch tabs and display points correctly', () => {
    cy.get('[aria-label="points tabs"]')
      .contains('Last 7 Days')
      .click();

    cy.get('[data-cy="points-last-seven"]').should('be.visible');
  });

  it('should display Total Points Redeemed correctly', () => {
    cy.contains('Total Points Redeemed').should('be.visible');
    cy.get('[data-cy="points-redeemed"]').should('be.visible');
  });

  it('should display Customers section with profile images and names', () => {
    cy.get('h5')
      .contains('Customers')
      .should('be.visible');

    cy.get('img[alt="profile"]').should('have.length.gt', 0);

    cy.get('p').contains('Points Today:').should('have.length.gt', 0);
  });
});
