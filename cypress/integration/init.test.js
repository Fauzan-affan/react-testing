describe("Cypress Initial Test", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.waitForReact()
    })
    
    it("Should working", () => {
        expect(true).to.equal(true)
    })
    
    it("Should clicked button", () => {
        cy.react('AddToDo').get('button').click()
    })
})