/// <reference types="Cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080/todo')
  })

  it("Check Default List Count and Text", () => {
    cy.get('.todo-list > li').should('be.visible').should('have.length', '2')
    cy.get('.todo-list > li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list > li').last().should('have.text', 'Walk the dog')
  })


})
