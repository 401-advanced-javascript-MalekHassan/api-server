'use strict';

const express = require('express');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');

const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);

app.get('/', (req, res) => {
  //   console.log(req.body);
  res.send('Welcome!');
});
let productArr = [];
let categoriesArr = [];
app.post('/products', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  record.id = productArr.length + 1;
  productArr.push(record);
  res.status(201).json(record);
});
app.get('/products', (req, res) => {
  let count = productArr.length;
  let results = productArr;
  res.json({ count, results });
});

app.put('/products/:id', (req, res, next) => {
  // replace one products by id
  let idToUpdate = req.params.id;
  let { category, name, display_name, description } = req.body;
  let updatedProduct = {
    category,
    name,
    display_name,
    description,
    idToUpdate,
  };
  productArr = productArr.map((record) =>
    record.id === parseInt(idToUpdate) ? updatedProduct : record
  );
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  // deletes one products by id
  let id = req.params.id;
  productArr = productArr.filter((record) => record.id !== parseInt(id));
  res.json({});
});

app.post('/categories', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  record.id = categoriesArr.length + 1;
  categoriesArr.push(record);
  res.json(record);
});
app.get('/categories', (req, res) => {
  let count = categoriesArr.length;
  let results = categoriesArr;
  res.json({ count, results });
});

app.put('/categories/:id', (req, res, next) => {
  // replace one categories by id
  let idToUpdate = req.params.id;
  let { category, name, display_name, description } = req.body;
  let updatedProduct = {
    category,
    name,
    display_name,
    description,
    idToUpdate,
  };
  categoriesArr = categoriesArr.map((record) =>
    record.id === parseInt(idToUpdate) ? updatedProduct : record
  );
  res.json(updatedProduct);
});

app.delete('/categories/:id', (req, res) => {
  // deletes one categories by id
  let id = req.params.id;
  categoriesArr = categoriesArr.filter((record) => record.id !== parseInt(id));
  res.json({});
});
app.get('/bad', (req, res) => {
  throw new Error('a test error');
});
app.use(error500);
app.use('*', error404);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};
