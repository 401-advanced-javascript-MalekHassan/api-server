'use strict';

const express = require('express');
const categoriesModle = require('../lib/models/catigories/categories.collection');
const router = express.Router();

router.post('/categories', (req, res, next) => {
  categoriesModle
    .create(req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});
router.get('/categories', (req, res) => {
  categoriesModle.get().then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  });
  // .catch(next);
});

router.get('/categories/:id', (req, res) => {
  categoriesModle.get(req.params.id).then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  });
  // .catch(next);
});

router.put('/categories/:id', (req, res, next) => {
  categoriesModle
    .update(req.params.id, req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});

router.patch('/categories/:id', (req, res, next) => {
  categoriesModle
    .update(req.params.id, req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});

router.delete('/categories/:id', (req, res, next) => {
  categoriesModle
    .delete(req.params.id)
    .then((data) => {
      let results = data;
      res.status(200).json({ results });
    })
    .catch(next);
});

module.exports = router;
