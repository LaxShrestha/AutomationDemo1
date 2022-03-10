class HomePage{

visit(){
    cy.visit('https://shift.com/')
}
visitSeller(){
    cy.visit('https://shift.com/sell-my-car')
 
}

visitViewCodeAll(){
    cy.visit(' ')
}
verifyLogo(){
    return cy.get('.navbar-logo-2 > img',{timeout:1000}).should('have.length',1)
}



}
export default HomePage

























