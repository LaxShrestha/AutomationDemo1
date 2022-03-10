class PracticePage1{


static loadHomePage(){
    cy.visit('https://codenboxautomationlab.com/')
    cy.url().should('include', 'codenbox')
}


static clickonPracticeBt(){
    cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({ force: true })
}

static getTitle(){
    cy.get('.page-title').invoke('text').then((text1) => {
        expect(text1.trim()).to.equal(text1)
})
}

static getDropdownOption(){
    cy.get('#dropdown-class-example').select('Selenium')
}

static selectSelenium(){
    cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')
}

}


export default PracticePage1
  