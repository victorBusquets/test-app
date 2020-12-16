describe('Lorem ipsum app', () => {
    const invalidSearchText = 'not existing lorem ipsum text';
    const imageSrc = 'https://picsum.photos/id/1000/500/500';

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should load more data on scroll', () => {
        cy.get('app-random-image-item').should('have.length', 20);
        cy.get('.random-image-list').scrollTo('bottom');
        cy.get('app-random-image-item').should('have.length', 40);
    });

    it('should show no data message if search invalid name', () => {
        cy.get('header.navbar .form-control').type(invalidSearchText);
        cy.get('.no-result-message').should('exist');
        cy.get('header.navbar .form-control').clear();
        cy.get('app-random-image-item').should('exist');
    });

    it('should show only one result (photo with id#1000)', () => {
        cy.get('header.navbar .form-control').type('1000');
        cy.get('app-random-image-item').should('have.length', 1);
        cy.get('app-random-image-item').find('img').should('have.attr', 'src').should('include', imageSrc);
    });
});