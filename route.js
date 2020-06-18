const express = require('express');
const logger = require('./config/logger');

const router = express.Router();
const EmployeeController = require('./app/controllers/employeecontroller');

router.get('/employee/all', (req, res) => {
  EmployeeController.getAll().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});

router.post('/employee/post', (req, res) => {
  EmployeeController.getAll().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/employee/post'} gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

module.exports = router;
