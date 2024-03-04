// cypress/integration/multiply.js

describe('Calculator API remove', () => {
    it('Should perform substraction correctly', () => {
      cy.request({
        method: 'POST',
        url: 'http://127.0.0.1:5000/multiply',
        body: {
          numbers: [30, 10]
        }
      }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.result).to.eq(300)
      })
    })
  })