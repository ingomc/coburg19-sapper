const baseUrl = 'http://localhost:3000/';
const coburg = 'kreisfreie-stadt-coburg/';
const hassberge = 'landkreis-hassberge/';

describe('Test Sites', () => {
  it('Homepage', () => {
    cy.visit(baseUrl);
    cy.get('h1').contains('Ampel');
    cy.get('#hp-cardlist > li').should('have.length', '12');
    cy.get('#footer-nav .card').should('have.length', '3');
    cy.get('main .social').should('have.length', '1');
  });
  it('Coburg', () => {
    cy.visit(baseUrl + coburg);
    cy.contains('Neue Fälle von gestern');
    cy.contains('Fälle der letzten 7 Tage');
    cy.contains('Fälle insgesamt');
    cy.contains('Tote bisher');
    cy.contains('Todesrate');
    cy.contains('Einwohnerzahl');
    cy.contains('7 Tage Inzidenz in Bayern');
    cy.contains('Aktive Fälle in Coburg');
    cy.contains('Bisher erkrankte und bisher erholte Personen in Coburg');
    cy.get('canvas').should('have.length', '2');
    cy.get('main .social').should('have.length', '1');
  });
  it('Hassberge', () => {
    cy.visit(baseUrl + hassberge);
    cy.contains('Neue Fälle von gestern');
    cy.contains('Fälle der letzten 7 Tage');
    cy.contains('Fälle insgesamt');
    cy.contains('Tote bisher');
    cy.contains('Todesrate');
    cy.contains('Einwohnerzahl');
    cy.contains('7 Tage Inzidenz in Bayern');
    cy.contains('Aktive Fälle in Haßberge');
    cy.contains('Bisher erkrankte und bisher erholte Personen in Haßberge');
    cy.get('canvas').should('have.length', '2');
    cy.get('main .social').should('have.length', '1');
  });
});
