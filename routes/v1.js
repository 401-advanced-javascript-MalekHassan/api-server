'use strict';

const express = require('express');
const router = express.Router();
const modelFinder = require('../lib/middleware/modelfinder');

router.param('model', modelFinder);

router.post('/:model', posting);
router.get('/:model', getAll);
router.put('/:model/:id', putting);
router.patch('/:model/:id', Patchputting);
router.delete('/:model/:id', deleting);

function posting(req, res, next) {
  req.model
    .create(req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
}
function getAll(req, res) {
  req.model.get().then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  });
  // .catch(next);
}

function putting(req, res, next) {
  req.model
    .update(req.params.id, req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
}

function Patchputting(req, res, next) {
  req.model
    .update(req.params.id, req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
}

function deleting(req, res, next) {
  req.model
    .delete(req.params.id)
    .then((data) => {
      let results = data;
      res.status(200).json({ results });
    })
    .catch(next);
}

module.exports = router;
