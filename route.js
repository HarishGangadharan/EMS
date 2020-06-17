const express = require('express');

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
  });
});

module.exports = router;
