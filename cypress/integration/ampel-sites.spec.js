const baseUrl = 'http://localhost:3000/';
const coburg = 'kreisfreie-stadt-coburg/';
const hassberge = 'landkreis-hassberge/';
const faq = 'aktuelle-fragen-zu-covid/';
const regeln = 'corona-ampel-regeln/';
const impressum = 'impressum/';

describe('Test Sites', () => {
  it('Homepage', () => {
    cy.visit(baseUrl);
    cy.get('h1').contains('Ampel');
    cy.get('#hp-cardlist > li').should('have.length', '13');
    cy.get('#footer-nav .card').should('have.length', '3');
    cy.get('main .social').should('have.length', '1');
    cy.contains('Neue Fälle in Deutschland');
    cy.contains('Neue Fälle in Bayern');
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
    cy.contains('Neue Fälle pro Tag in Coburg');
    cy.contains('Alle Fälle bisher in Coburg');
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
    cy.contains('Neue Fälle pro Tag in Haßberge');
    cy.contains('Alle Fälle bisher in Haßberge');
    cy.get('canvas').should('have.length', '2');
    cy.get('main .social').should('have.length', '1');
  });
  it('FAQ', () => {
    cy.visit(baseUrl + faq);
    cy.contains('Wieviel neue Fälle Corona gibt es aktuell in Deutschland?');
  });
  it('Regeln', () => {
    cy.visit(baseUrl + regeln);
    cy.contains('Gelb');
  });
  it('Impressum', () => {
    cy.visit(baseUrl + impressum);
    cy.get('.email').should('not.contain', 'kontakt');
    cy.get('button').contains('Daten im Klartext anzeigen').click();
    cy.wait(200);
    cy.get('.email').should('not.contain', 'kontakt@corona-ampel-coburg.de');
  });
});
