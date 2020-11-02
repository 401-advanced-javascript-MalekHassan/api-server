'use strict';
const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
let obj = {
  name: 'furnitures',
  display_name: 'woody table',
  description: 'nice table',
};
let newObj = {
  name: 'tooth',
  display_name: 'woody tooth',
  description: 'nice tooth',
};
describe('api server', () => {
  it('should respond with 500 on an error', () => {
    mockRequest.get('/bad').then((results) => {
      expect(results.status).toBe(500);
    });
  });
  it('should respond with 404 on a wrong route', () => {
    return mockRequest.get('/foo').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 404 on a wrong method', () => {
    return mockRequest.post('/').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond properly on GET request to /categories', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
    // .catch(console.error);
  });

  it('should respond properly on POST request to /categories', () => {
    return mockRequest
      .post('/categories')
      .send(obj)
      .then(() => {
        return mockRequest
          .post(`/categories`)
          .send(newObj)
          .then((results) => {
            expect(results.status).toBe(200);
            Object.keys(newObj).forEach((element) => {
              expect(results.body.results[element]).toBe(newObj[element]);
            });
          });
      });
    // .catch(console.error);
  });

  it('should respond properly on PUT request to /categories', () => {
    return mockRequest
      .post('/categories')
      .send(obj)
      .then((data) => {
        // console.log('lllll', data.body);
        return mockRequest
          .put(`/categories/${data.body.results._id}`)
          .send(newObj)
          .then((results) => {
            // console.log('hhhhhhhhhhhhhh', results);
            expect(results.status).toBe(200);
            Object.keys(newObj).forEach((element) => {
              expect(results.body.results[element]).toBe(newObj[element]);
            });
          });
      });
    // .catch(console.error);
  });

  it('should respond properly on DELETE request to /categories', () => {
    return mockRequest
      .post('/categories')
      .send(obj)
      .then((data) => {
        // console.log('lllll', data.body);
        return mockRequest
          .delete(`/categories/${data.body.results._id}`)
          .send(newObj)
          .then((results) => {
            // console.log('hhhhhhhhhhhhhh', results);
            expect(results.status).toBe(200);
            Object.keys(obj).forEach((element) => {
              expect(results.body.results[element]).toBe(obj[element]);
            });
          });
      });
    // .catch(console.error);
  });

  it('should respond properly on GET request to /products', () => {
    return mockRequest.get('/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('should respond properly on POST request to /products', () => {
    return mockRequest
      .post('/products')
      .send(obj)
      .then(() => {
        return mockRequest
          .post(`/products`)
          .send(newObj)
          .then((results) => {
            expect(results.status).toBe(200);
            Object.keys(newObj).forEach((element) => {
              expect(results.body.results[element]).toBe(newObj[element]);
            });
          });
      });
    // .catch(console.error);
  });

  it('should respond properly on PUT request to /products', () => {
    return mockRequest
      .post('/products')
      .send(obj)
      .then((data) => {
        // console.log('lllll', data.body);
        return mockRequest
          .put(`/products/${data.body.results._id}`)
          .send(newObj)
          .then((results) => {
            // console.log('hhhhhhhhhhhhhh', results);
            expect(results.status).toBe(200);
            Object.keys(newObj).forEach((element) => {
              expect(results.body.results[element]).toBe(newObj[element]);
            });
          });
      });
    // .catch(console.error);
  });

  it('should respond properly on DELETE request to /products', () => {
    return mockRequest
      .post('/products')
      .send(obj)
      .then((data) => {
        // console.log('lllll', data.body);
        return mockRequest
          .delete(`/products/${data.body.results._id}`)
          .send(newObj)
          .then((results) => {
            // console.log('hhhhhhhhhhhhhh', results);
            expect(results.status).toBe(200);
            Object.keys(obj).forEach((element) => {
              expect(results.body.results[element]).toBe(obj[element]);
            });
          });
      });
    // .catch(console.error);
  });
  // ------------------------------------------------------------------------

  // it('should respond with 200 on a correct route', () => {
  //   return mockRequest.get('/products').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });
  // it('should respond with 201 for post', () => {
  //   return mockRequest.post('/products').then((results) => {
  //     expect(results.status).toBe(201);
  //   });
  // });
  // it('should respond properly on PUT request to /products', () => {
  //   return mockRequest.put('/products/:id').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });

  // it('should respond properly on DELETE request to /products', () => {
  //   return mockRequest.delete('/products/:id').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });
  // it('should respond properly on GET request to /categories', () => {
  //   return mockRequest.get('/categories').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });

  // it('should respond properly on POST request to /categories', () => {
  //   return mockRequest.post('/categories').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });

  // it('should respond properly on PUT request to /categories', () => {
  //   return mockRequest.put('/categories/:id').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });

  // it('should respond properly on DELETE request to /categories', () => {
  //   return mockRequest.delete('/categories/:id').then((results) => {
  //     expect(results.status).toBe(200);
  //   });
  // });
});
