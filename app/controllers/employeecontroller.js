const Employee = require('../models/employee');

async function getAll() {
  return Employee.findAll();
}

module.exports = {
  getAll,
};
