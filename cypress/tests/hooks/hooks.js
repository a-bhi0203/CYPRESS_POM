describe('Hooks', function() {
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
  
    afterEach(function(){
      // runs after each test in the block
    })
  
    after(function() {
      // runs once after all tests in the block
    })
  })