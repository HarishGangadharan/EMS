const query = require('../queryexecution');
const nativeQuery = require('../../nativequries/employeequries');

async function findAll() {
  return query.executeQuery(nativeQuery.projectSelectAll);
}

module.exports = {
  findAll,
};
