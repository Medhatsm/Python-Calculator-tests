// cypress/integration/calculatorTests.js

describe('Calculator API Tests', () => {
  // it('successfully loads', () => {
  //   cy.visit('http://otelboutiquej.dev.sealights.co:5000/') // change URL to match your dev URL
  // })
  // it('successfully loads', () => {
  //   cy.visit('http://172.17.0.2:5000/') // change URL to match your dev URL
  // })
  // it('successfully loads', () => {
  //   cy.visit('http://172.29.80.150:5000/') // change URL to match your dev URL
  // })

  describe('Calculator API', () => {
    it('Should perform addition correctly', () => {
      cy.request({
        method: 'POST',
        url: 'http://127.0.0.1:5000/add',
        body: {
          numbers: [5, 10, 30]
        }
      }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.result).to.eq(45)
      })
    })
  })
  // describe('Calculator API remove', () => {
  //   it('Should perform substraction correctly', () => {
  //     cy.request({
  //       method: 'POST',
  //       url: 'http://127.0.0.1:5000/subtract',
  //       body: {
  //         numbers: [30, 20, 5]
  //       }
  //     }).then(response => {
  //       expect(response.status).to.eq(200)
  //       expect(response.body.result).to.eq(5)
  //     })
  //   })
  // })
  // it('Should perform addition correctly', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: 'http://127.0.0.1:5000/add',
  //     body: {
  //       numbers: [5, 10, 30]
  //     }
  //   }).then(response => {
  //     expect(response.status).to.eq(200)
  //     expect(response.body.result).to.eq(45)
  //   })
  // })

  // it('Should perform substraction correctly', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: 'http://127.0.0.1:5000/subtract',
  //     body: {
  //       numbers: [30, 20, 5]
  //     }
  //   }).then(response => {
  //     expect(response.status).to.eq(200)
  //     expect(response.body.result).to.eq(5)
  //   })
  // })
  
  // // it('testFirstExpression', () => {
  //   cy.request('GET', 'http://localhost:9080/api/sum/geometric?first=1&ratio=0.5&count=5')
  //     .then((response) => {
  //       const responseBody = JSON.parse(response.body);
  //       expect(responseBody).to.deep.equal({ result: 1.9375 });
  //     });
  // });

  // it('testSecondExpression', () => {
  //   cy.request('GET', 'http://localhost:9080/api/evaluate/3*7')
  //     .then((response) => {
  //       const responseBody = JSON.parse(response.body);
  //       expect(responseBody).to.deep.equal({ result: 21.0 });
  //     });
  // });

  // it('testThirdExpression', () => {
  //   cy.request('GET', 'http://localhost:9080/api/evaluate/(3*7+4)*0.2')
  //     .then((response) => {
  //       const responseBody = JSON.parse(response.body);
  //       expect(responseBody).to.deep.equal({ result: 5.0 });
  //     });
  // });

  // it('testFourthExpression', () => {
  //   cy.request('GET', 'http://localhost:9080/api/evaluate/3*cos(2*3.141592653589793238)')
  //     .then((response) => {
  //       const responseBody = JSON.parse(response.body);
  //       expect(responseBody).to.deep.equal({ result: 3.0 });
  //     });
  // });


});
