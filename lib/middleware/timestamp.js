'use strict';

module.exports = (req, res, next) => {
  var date = new Date();
  req.date = date;
  next();
};
