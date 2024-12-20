Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    if(email) {
        cy.get('#mail').type(email);
    };
    if(password) {
        cy.get('#pass').type(password);
    };
    cy.contains('Submit').click();
});

Cypress.Commands.add('logout', (email, password) => {
    cy.contains('Log out').click();
});

Cypress.Commands.add('addNewBook',(title, author)=>{
    cy.contains('Add new').click();
    if(title) {
        cy.get('#title').type(title);
    };
    if(author){
        cy.get('#authors').type(author);
    };
    cy.contains('Submit').click();
});