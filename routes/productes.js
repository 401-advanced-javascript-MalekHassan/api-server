'use strict';

const express = require('express');
const productsModle = require('../lib/models/products/products.collection');
const router = express.Router();

router.post('/products', (req, res, next) => {
  productsModle
    .create(req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});
router.get('/products', (req, res, next) => {
  productsModle
    .get()
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});

router.get('/products/:id', (req, res) => {
  productsModle.get(req.params.id).then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  });
  // .catch(next);
});

router.patch('/products/:id', (req, res, next) => {
  productsModle
    .update(req.params.id, req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});

router.put('/products/:id', (req, res, next) => {
  productsModle
    .update(req.params.id, req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      console.log('data', data);
      res.status(200).json({ count, results });
    })
    .catch(next);
});

router.delete('/products/:id', (req, res, next) => {
  productsModle
    .delete(req.params.id)
    .then((data) => {
      let results = data;
      res.status(200).json({ results });
    })
    .catch(next);
});

module.exports = router;
