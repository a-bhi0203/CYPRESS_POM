import LoginPage from "../../support/pages/LoginPage"
describe("Login Suite", function(){
    const login = new LoginPage()
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })
    
      beforeEach(function() {
          cy.visit(this.data.URL)
      })
    it("Login with correct username and password", function(){
        login.navigatetologin()
        login.username()
    })

})