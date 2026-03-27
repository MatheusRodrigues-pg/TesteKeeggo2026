// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

afterEach(() => {
  cy.clearCookies() //limpa os cookies após cada teste
  cy.clearLocalStorage()
  cy.window().then((win) => {
    win.sessionStorage.clear()
  })
  cy.request({  //limpa o carrinho após cada teste
    method: "DELETE",
    url: "api/carrinho/1", 
    headers: {
        "Content-Type": "application/json",
    }
  })
})
