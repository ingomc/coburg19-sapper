const baseUrl = 'http://localhost:3000/';

describe('Test Sites', () => {
  it('Navigates', () => {
    cy.visit(baseUrl);
    cy.get('#hp-cardlist ');
    cy.contains('Kronach').click();
    cy.location('pathname').should('include', 'landkreis-kronach');
  });
});
