it("Should open the books page", ()=>{
    cy.visit('/');
    cy.contains('Books list').should('be.visible');
});

it("Success login", ()=>{
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('test@test.com').should('be.visible');
    cy.contains('Add new').should('have.class', 'btn');
    cy.logout();
});

it("Wrong password", ()=>{
    cy.visit('/');
    cy.login('test@test.com');
    cy.get('#pass').then(($el)=>$el[0].checkValidity()).should('be.false');
});

it("Should add new book", ()=>{
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addNewBook('title1', 'author1');
    cy.contains('title1').should('be.visible');
    cy.logout();
});

it("Should add to favorite", ()=>{
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addNewBook('title2', 'author2');
    cy.get('button').then(($element) => {return $element[2].click();});
    cy.contains('Delete from favorite').should('be.visible');
    cy.logout();
});

it("Should delete from favorite", ()=>{
    cy.visit('/');
    cy.login("test@test.com", "test");
    cy.addNewBook('title3', 'author3');
    cy.get('.mt-3').then(($element) => {return $element[1].click();});
    cy.contains('title2').should("be.visible");
    cy.contains("Dowload book").should("be.visible");
    cy.logout();
});