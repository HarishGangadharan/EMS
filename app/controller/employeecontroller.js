const Employee = require('../model/employee');

async function getAll() {
    return await Employee.findAll();
}

module.exports = {
  getAll
};