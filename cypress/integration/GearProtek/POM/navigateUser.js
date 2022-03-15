///<reference types='cypress'/>

class navigateUser {

    clickUserMenu() {

        cy.get('#mainDrawer > nav > ul > li:nth-child(3) > div > div.md-tile-content.md-tile-content--left-icon > div')
        .contains('Users')
        .click({force:true})

        cy.url().should('include','https://gearprotek.dnaqa.net/portal/user')
    }
}

export default navigateUser