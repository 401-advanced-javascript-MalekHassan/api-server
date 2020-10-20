'use strict';
require('@code-fellows/supergoose');
const proModel = require('../lib/models/products/products.collection');
const cateModel = require('../lib/models/catigories/categories.collection');

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

describe('Products models', () => {
  it('should respond properly on GET request to /products', () => {
    return proModel.create(obj).then((record) => {
      return proModel.get().then((results) => {
        Object.keys(obj).forEach((element) => {
          expect(results[element]).toBe(obj[element]);
        });
      });
    });
  });
  it('should respond properly on POST request to /products', () => {
    return proModel.create(obj).then((results) => {
      Object.keys(obj).forEach((element) => {
        expect(results[element]).toBe(obj[element]);
      });
    });
  });
  it('should respond properly on PUT request to /products', () => {
    return proModel.create(obj).then((record) => {
      console.log('kkkkk', record._id);
      return proModel.update(record._id).then(() => {
        return proModel.get(record._id).then((resultse) => {
          Object.keys(obj).forEach((element) => {
            expect(resultse[element]).toBe(newObj[element]);
          });
        });
      });
    });
  });
  it('should respond properly on GET request to /products', () => {
    return proModel.create(obj).then((record) => {
      return proModel.delete(record._id).then((results) => {
        Object.keys(obj).forEach((element) => {
          expect(results[element]).toBe(obj[element]);
        });
      });
    });
  });
});
