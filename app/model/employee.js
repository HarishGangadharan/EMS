const query = require('../queryexecution');
const native_query = require('../nativequery');

async function findAll() {
  return await query.executeQuery(native_query.project_select_all);
}

module.exports = {
  findAll
}