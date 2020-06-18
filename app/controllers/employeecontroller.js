/* eslint-disable consistent-return */
const Employee = require('../models/employee');
const logger = require('../../config/logger');

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

module.exports = {
  getAll,
};
