
Given(/^A user opens the login page$/, () => {
    return cy.visit ("http://www.saucedemo.com");
});

When(/^A user enter the username "([^"]*)"$/, (username) => {
	cy.get('#user-name').type(username);
	
});

When(/^A user enter the password "([^"]*)"$/, (password) => {
	cy.get('#password').type(password)
	
});

When(/^A user clicks on the login Button$/, () => {
    cy.get('#login-button').click()
	
});

Then(/^A user will be logged in$/, () => {
    cy.url().should('contains','/inventory.html')

});
