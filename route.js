const express = require('express');
const logger = require('./config/logger');

const router = express.Router();
const EmployeeController = require('./app/controllers/employeecontroller');
const RoleController = require('./app/controllers/rolecontroller');

/**
 * Return all the employees.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.get('/employee/all', (req, res) => {
  EmployeeController.getAll().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});

/**
 * Create a employee.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.post('/employee/create', (req, res) => {
  EmployeeController.create(req.body).then((data) => {
    res.send(`User succesfully added and id is ${data.insertId}`);
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/employee/create'} gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Delete a particular employee.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.delete('/employee/:id', (req, res) => {
  EmployeeController.remove(req.params).then((data) => {
    res.send(data.affectedRows === 1 ? `Id ${req.params.id} has been deleted ` : 'No employee has been deleted');
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/employee/:id'} gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Fetch a particular employee.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.get('/employee/:id', (req, res) => {
  EmployeeController.fetchUser(req.params).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/employee/:id'} during fetching user gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Update a particular employee.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.put('/employee/:id', (req, res) => {
  EmployeeController.update(req.params.id, req.body).then(() => {
    res.send('User succesfully Updated');
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/employee/:id'} during updating user gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Create a particular role.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.post('/role/create', (req, res) => {
  RoleController.create(req.body).then((data) => {
    res.send(`Role succesfully added and id is ${data.insertId}`);
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/role/create'} gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Fetch all roles.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.get('/role/all', (req, res) => {
  RoleController.getAll().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});

/**
 * Delete a particular role.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.delete('/role/:id', (req, res) => {
  RoleController.remove(req.params).then((data) => {
    res.send(data.affectedRows === 1 ? `Id ${req.params.id} has been deleted ` : 'No role has been deleted');
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/role/:id'} gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Fetch a particular role.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.get('/role/:id', (req, res) => {
  RoleController.fetchUser(req.params).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/role/:id'} during fetching user gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

/**
 * Update a particular role.
 *
 * @param req Request object.
 * @param res Respose object.
 */
router.put('/role/:id', (req, res) => {
  RoleController.update(req.params.id, req.body).then(() => {
    res.send('Role successfully updated');
  }).catch((err) => {
    res.send(err);
    logger.log({
      message: `Error occured while ${'/role/:id'} during updating user gets hit`,
      error: err,
      time: new Date(),
      level: 'error',
    });
  });
});

module.exports = router;
