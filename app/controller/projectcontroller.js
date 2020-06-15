const Employee = require('../model/Employee');


async function getAll() {
    console.log('---------------------calling');
    const result = await Employee.findAll();
    console.log('---------------------result');
    // expected output: 'resolved'
}
  

module.exports = {
    getAll
}