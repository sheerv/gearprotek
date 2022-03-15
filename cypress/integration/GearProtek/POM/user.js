///<reference types='cypress'/>

class user {

    addUser() {
        // cy.url().should('include','https://gearprotek.dnaqa.net/portal/user')
        // cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__toolbar > header > button:nth-child(1)')
        // .contains('New').click({multiple:true})

        var email = 'ashleyseay@dnamicro.com'
        var fname = 'Ashley'
        var lname = 'Seay'
        var password = 'DNAR0cks!!'
        var role = 'Agent'

        cy.get('#email').type(email,{force:true})
        .should('be.visible')
        .invoke('val')
        .and('contain',email)

        cy.get('#first_name').type(fname,{force:true})
        .should('be.visible')
        .invoke('val')
        .and('contain',fname)

        cy.get('#last_name',{force:true}).type(lname,{force:true})
        .should('be.visible')
        .invoke('val')
        .and('contain',lname)

        cy.get('#role-toggle').click()
        cy.get('[role="listbox"]').contains(role).click()
       
        cy.get('#password').type(password,{force:true})
        .should('be.visible')
        .invoke('val')
        .and('contain',password)
        
        cy.get('#dialog > footer > button.md-btn.md-btn--flat.md-btn--text.md-pointer--hover.md-text--theme-primary.md-ink--primary.md-inline-block.md-btn--dialog.dialogAction__button--primary').click()
    }

    getUser() {
        var email = 'ashleyseay@dnamicro.com'

        cy.get('tr>td>div>span').each(($index) => {
            const e = $index.text()
        
            if(e !== email) {
                cy.log(e + ' is not equal')
            }
            else {
                cy.wrap($index).click()
            }
        })
    }

    updateUserDetails() {
        var fname = 'mary ashley jane'
        fname  = fname.toLowerCase().replace(/\b[a-z]/g,(letter) => {
            return letter.toUpperCase()
        })

        cy.get('#first_name').clear().type(fname)
        .should('be.visible')
        .invoke('val')
        .and('contain', fname)

        cy.contains('Save').click({force:true})
    }

    activeToInactive() {
        cy.get('#status-menu').within(()  => {
            cy.get('#status-toggle').click()
            cy.get('#status-menu-options').contains('Inactive').click() 
        })

        cy.contains('Save').click({force:true})

        cy.get('.pageTable').within(() => {
            cy.get('button').contains('close').click({force:true})
        })
    }

    deleteToActive() {
        cy.get('#status-menu').within(()  => {
            cy.get('#status-toggle').click()
            cy.get('#status-menu-options').contains('Active').click() 
        })

        cy.contains('Save').click({force:true})

        cy.get('.pageTable').within(() => {
            cy.get('button').contains('close').click({force:true})
        })
    }

    inactiveToDelete() {
        cy.get('#status-menu').within(()  => {
            cy.get('#status-toggle').click()
            cy.get('#status-menu-options').contains('Delete').click() 
        })

        cy.contains('Save').click({force:true})

        cy.get('.pageTable').within(() => {
            cy.get('button').contains('close').click({force:true})
        })
    }
    
    deleteUser() {
        var email = 'ashleyseay@dnamicro.com'

        cy.get('tr>td>div>span').each(($index,index) => {
            let  i = index
           
            if($index.text() === email) {
                cy.get('button').each(($elem,index) => {
                if(i === index) {
                    cy.wrap($elem).contains('delete').click({force:true})
                }
            })
           
            }
           
        })

        cy.get('.md-icon-separator').within(() => {
            cy.get('span').contains('Yes').click()
        })
    }
}

export default user