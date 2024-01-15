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

describe('To Do App', () => {
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

  it("Check Off First To Do Item", () => {
    cy.get('.toggle').first().check()
    cy.get('.todo-list > li:nth-child(1) > div > label').should('have.text', 'Pay electric bill').should('have.css', 'text-decoration-line', 'line-through')
    cy.get('.todo-list > li').last().should('have.text', 'Walk the dog').should('not.have.css', 'text-decoration-line', 'line-through')
  })

  it("Check Off Second To Do Item", () => {
    cy.get('.toggle').first().check()
    cy.get('.toggle').last().check()
    cy.get('.todo-list > li:nth-child(2) > div > label').should('have.text', 'Walk the dog')
    cy.get('.todo-list > li:nth-child(1) > div > label').should('have.text', 'Pay electric bill').should('have.css', 'text-decoration-line', 'line-through')
  })

  it("Add an Item to The List and Remove It", () => {
    cy.get('.new-todo').should('be.visible').type('Get toothpaste').type('{enter}')
    cy.get('ul > li:nth-child(3) > div > .todo-button').click({force: true})
    cy.get('ul > li:nth-child(3) > div > label').should('not.exist')
  })


})
