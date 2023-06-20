describe('Login API Test', () => {
    it('Should successfully log in', () => {
      //cy.visit('http://183.82.7.112:9090/');
  
      cy.request({
        method: 'POST',
        url: 'http://183.82.7.112:9090/api/auth/sign-in',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          username: 'admin@gmail.com',
          password: 'Test@123',
        },
      }).then((response) => {
        cy.expect(response.status).to.equal(200);
        cy.expect(response.body).to.have.property('token');
        // Add more assertions as needed
      });
    });
  });
  