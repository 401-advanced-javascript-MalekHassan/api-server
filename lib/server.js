'use strict';

require('dotenv').config();
const express = require('express');
const apiRout = require('../routes/v1');
// const productsRout = require('../routes/productes');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');

const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);
app.use('/', apiRout);
// app.use('/', productsRout);

app.get('/', (req, res) => {
  //   console.log(req.body);
  res.send('Welcome!');
});

app.use('*', error404);
app.use(error500);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};
