const query = require('../queryexecution');
const nativeQuery = require('../../nativequries/employeequries');

/*
 * Return all the employee details
 */
async function findAll() {
  return query.executeQuery(nativeQuery.employeeSelectAll);
}

/**
 * Create a new employee.
 *
 * @param data Employee Object which consist of all the details
 */
async function create(data) {
  return query.executeQuery(nativeQuery.creeteEmployee, {
    first_name: data.first_name,
    last_name: data.last_name,
    mobile: data.mobile,
    dob: data.dob,
    email: data.email,
    created_at: data.created_at,
    role_id: data.role_id,
  });
}

/**
 * Allows to fetch a particular employee.
 *
 * @param data Employee id that needs to be removed.
 */
async function fetchUser(data) {
  return query.executeQuery(nativeQuery.employeeSelect, { id: data.id });
}

/**
 * Update a particular employee.
 *
 * @param  id    Employee id to be updated
 *  @param data Employee Object which consist of all the updated details
 */
async function update(id, data) {
  // eslint-disable-next-line consistent-return
  fetchUser({ id }).then((res) => {
    if (res[0] && res[0].id) {
      return query.executeQuery(nativeQuery.employeeUpdate, {
        first_name: data.first_name,
        last_name: data.last_name,
        mobile: data.mobile,
        dob: data.dob,
        email: data.email,
        role_id: data.role_id,
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
      return query.executeQuery(nativeQuery.employeeDelete, { id: data.id });
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
