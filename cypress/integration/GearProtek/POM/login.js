///<reference types='cypress'/> 

class Login {
    visit() {
        cy.viewport(2254,980)
        cy.visit('https://gearprotek.dnaqa.net/portal/')
        cy.url().should('include','https://gearprotek.dnaqa.net/login?return_url=/portal/')
    }

    userLogin() {
        var email = 'qa@dnamicro.com'
        var password = 'DNAR0cks!!'

        cy.get('form').within(() => {
            cy.get('#email').clear().type(email,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',email)

            cy.get('#password').clear().type(password,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',password)

            cy.get('button[type=submit]').click({force:true})
        })
    }

    emptyEmailPass() {
        cy.get('button[type=submit]').click({force:true})
    }

    incorrectPassEmail() {
        var email = 'ra@dnamicro.com'
        var password = 'DnaR0cks!!'

        cy.get('form').within(() => {
            cy.get('#email').type(email,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',email)

            cy.get('#password').type(password,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',password)

            cy.get('button[type=submit]').click({force:true})
        })
    }

    incorrectPassword() {
        var email = 'qa@dnamicro.com'
        var password = 'DnaR0cks!!'

        cy.get('form').within(() => {
            cy.get('#email').clear().type(email,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',email)

            cy.get('#password').clear().type(password,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',password)

            cy.get('button[type=submit]').click({force:true})
        })
    }

    incorrectEmail() {
        var email = 'da@dnamicro.com'
        var password = 'DNAR0cks!!'

        cy.get('form').within(() => {
            cy.get('#email').clear().type(email,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',email)

            cy.get('#password').clear().type(password,{force:true})
            .should('be.visible')
            .invoke('val')
            .and('contain',password)

            cy.get('button[type=submit]').click({force:true})
        })
    }
}
export default Login