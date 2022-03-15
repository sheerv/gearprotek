///<reference types='cypress'/> 

import Login from "./GearProtek/POM/login"
import navigateUser from "./GearProtek/POM/navigateUser"
import user from "./GearProtek/POM/user"

describe('CRUD', () => {
    Cypress.on('uncaught:exception',(error,runnable) => {
        return false
    })

    const l = new Login
    const u = new user

    before(() => {
        l.visit()
        // l.emptyEmailPass()
        // cy.wait(6000)
        // l.incorrectPassEmail()
        // cy.wait(6000)
        // l.incorrectEmail()
        // cy.wait(6000)
        // l.incorrectPassword()
    })

    it('GearProtek', () => {
        const n = new navigateUser
        
        l.userLogin()
        n.clickUserMenu()
        // // u.addUser()
        u.getUser()
        u.activeToInactive()
        u.getUser()
        u.inactiveToDelete()
        u.getUser()
        u.deleteToActive() 
        cy.wait(4000)
        u.deleteUser()
       
    }) 
})