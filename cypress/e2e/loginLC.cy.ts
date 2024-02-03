import{LoginPageLC} from "../../pages/LoginLocCode.ts/LoginLC"

describe('LOGIN LC', () => {
    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
           cy.visit(`${Cypress.env('stage')}`)
             LoginPageLC.buttonLoginLC(Cypress.env('email'), Cypress.env('password'))
      })
    })
    it('login page', () => {
        cy.visit(`${Cypress.env('stage')}`)
    });
});