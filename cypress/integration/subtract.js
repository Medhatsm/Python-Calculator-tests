// cypress/integration/subtract.js

describe('Calculator API remove', () => {
    it('Should perform substraction correctly', () => {
      cy.request({
        method: 'POST',
        url: 'http://127.0.0.1:5000/subtract',
        body: {
          numbers: [30, 20, 5]
        }
      }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.result).to.eq(5)
      })
    })
  })