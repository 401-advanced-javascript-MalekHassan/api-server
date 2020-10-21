'use strict';
const categoriesModle = require('../models/catigories/categories.collection');
const productsModle = require('../models/products/products.collection');

module.exports = (req, res, next) => {
  const model = req.params.model;
  // console.log('__MODEL__', model);
  switch (model) {
    case 'categories':
      req.model = categoriesModle;
      break;
    case 'products':
      req.model = productsModle;
      break;
    case 'bad':
      res.status(500).json({});
      break;
    default:
      res.status(404).json({});
      return;
  }
  next();
};
