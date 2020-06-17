'use strict';

function timestamp(req, res, next) {
  if (req.method === 'GET' || req.method === 'POST') {
    console.log('-----------1111111111111111-------------LOGGED', req.body);
  }
  next();
}

module.exports = timestamp;
