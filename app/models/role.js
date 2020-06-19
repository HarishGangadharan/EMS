const query = require('../queryexecution');
const nativeQuery = require('../../nativequries/rolequries');

/*
 * Return all the role details
 */
async function findAll() {
  return query.executeQuery(nativeQuery.roleSelectAll);
}

/**
 * Create a new role.
 *
 * @param data Role Object which consist of all the details
 */
async function create(data) {
  return query.executeQuery(nativeQuery.roleCreate, {
    name: data.name,
  });
}

/**
 * Allows to fetch a particular employee.
 *
 * @param data Employee id that needs to be removed.
 */
async function fetchUser(data) {
  return query.executeQuery(nativeQuery.roleSelect, { id: data.id });
}

/**
 * Update a particular role.
 *
 *  @param  id    role id to be updated
 *  @param data role Object which consist of all the updated details
 */
async function update(id, data) {
// eslint-disable-next-line consistent-return
  fetchUser({ data }).then((res) => {
    if (res[0] && res[0].id) {
      return query.executeQuery(nativeQuery.roleUpdate, {
        name: data.name,
        id,
      });
    }
  });
}

/**
 * Allows to remove a particular employee.
 *
 * @param data Employee id that needs to be removed.
 */
async function remove(data) {
// eslint-disable-next-line consistent-return
  fetchUser({ data }).then((res) => {
    if (res[0] && res[0].id) {
      return query.executeQuery(nativeQuery.roleDelete, { id: data.id });
    }
  });
}

module.exports = {
  findAll,
  create,
  remove,
  fetchUser,
  update,
};
