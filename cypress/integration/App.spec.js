describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with goal', () => {
    cy.visit ('/');
    cy.get('[data-cy=goaltitle]').should('contain', 'Reading');
  });
});