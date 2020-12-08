const { validateYupSchema } = require("formik");

//after running a test, you have to logout from inside cypress to run again
// (or else you automatically sign in before tests run)
describe ('Test App', () => {
    it ('User logs in', () => {
      cy.visit('/')
      cy.get('input[type="email"]').as("email");
      cy.get('input[type="password"]').as("password")
      //data-focusable is touchable opacity
      cy.get('[data-focusable="true"]').contains(/log in/i).as("login")

      cy.get("@email").type("testuser@fake.com")
      cy.get("@password").type("testtest")
      cy.get("@login").click()
    });
  });