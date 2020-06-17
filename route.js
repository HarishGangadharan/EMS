const express = require('express');
const router = express.Router();
const EmployeeController = require('./app/controller/employeecontroller');

router.get('/employee/all', (req, res, next) => {
  EmployeeController.getAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.send(err)
  });
});

router.post('/employee/post', (req, res, next) => {
  EmployeeController.getAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.send(err)
  });
});

module.exports = router;