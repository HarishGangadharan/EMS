/* eslint-disable consistent-return */
const Employee = require('../models/employee');
const logger = require('../../config/logger');

/**
 * Return all the employees fetched from the model.
 *
 */
async function getAll() {
  try {
    return Employee.findAll();
  } catch (error) {
    logger.log({
      message: 'Error occured in getAll method in employee controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to create a new employee.
 *
 * @param data Employee Object which consist of all the details
 */
async function create(data) {
  try {
    return Employee.create(data);
  } catch (error) {
    logger.log({
      message: 'Error occured in create method in employee controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to remove a particular employee.
 *
 * @param data Employee id that needs to be removed.
 */
async function remove(data) {
  try {
    return Employee.remove(data);
  } catch (error) {
    logger.log({
      message: 'Error occured in remove method in employee controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to fetch a particular employee.
 *
 * @param data Employee id that needs to be fetched.
 */
async function fetchUser(data) {
  try {
    return Employee.fetchUser(data);
  } catch (error) {
    logger.log({
      message: 'Error occured in fetchUser method in employee controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to update a particular employee.
 *
 * @param id   Employee id that needs to be updated.
 * @param data Updated employee object.
 */
async function update(id, data) {
  try {
    return Employee.update(id, data);
  } catch (error) {
    logger.log({
      message: 'Error occured in update method in employee controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

module.exports = {
  getAll,
  create,
  remove,
  fetchUser,
  update,
};
