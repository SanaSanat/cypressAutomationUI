describe('INTERCEPT', () => {
    it('network request spy', function (){
        cy.fixture("progress.json").as("data")  //this.data
        cy.intercept('POST','*/login').as('login')//const login = cy.intercept('POST','*/login')
        cy.intercept(
            'https://server-stage.pasv.us/course/coursesProgress/65bdb5fb675c40a583524b6e',
            {fixture:"progress.json"}
            ).as('course')
        cy.visit(`${Cypress.env('stage2')}/user/login`)
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'),{log:false})
        cy.get('button[type="submit"]').click()
        cy.wait('@login').then(resD=>{
          console.log(resD,'res') 
          let id = resD.response.body.payload.user._id 
          cy.location().should(loc=>{
            console.log(loc,'loc')
            expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
            expect(resD.response.statusCode).to.eq(200)
            
          })
               
        })
        cy.visit('https://stage.pasv.us/profile/65bdb5fb675c40a583524b6e/progress')
        cy.wait('@course').then(ele=>{
            console.log(ele,'response')            
            cy.wrap(this.data).should('deep.equal',ele.response.body)       
        })
    });

})