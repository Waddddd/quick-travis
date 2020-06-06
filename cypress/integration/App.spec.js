describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with goal', () => {
    cy.visit ('/');
    cy.get('[data-cy=goaltitle]').should('contain', 'Reading');
  });

  it ('shows see more dialog', () => {
    cy.visit ('/');
    cy.get('[data-cy=seemore]').click();
    cy.get('[data-cy=dialogcontent]').should('contain','Read a book for 10 minutes')
  })
});