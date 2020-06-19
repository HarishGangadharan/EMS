/* eslint-disable consistent-return */
const Role = require('../models/role');
const logger = require('../../config/logger');

/**
 * Return all the roles fetched from the model.
 *
 */
async function getAll() {
  try {
    return Role.findAll();
  } catch (error) {
    logger.log({
      message: 'Error occured in getAll method in role controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to create a new role.
 *
 * @param data role Object which consist of all the details
 */
async function create(data) {
  try {
    return Role.create(data);
  } catch (error) {
    logger.log({
      message: 'Error occured in create method in role controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to remove a particular role.
 *
 * @param data role id that needs to be removed.
 */
async function remove(data) {
  try {
    return Role.remove(data);
  } catch (error) {
    logger.log({
      message: 'Error occured in remove method in role controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to fetch a particular role.
 *
 * @param data role id that needs to be fetched.
 */
async function fetchUser(data) {
  try {
    return Role.fetchUser(data);
  } catch (error) {
    logger.log({
      message: 'Error occured in fetchUser method in role controller',
      error,
      time: new Date(),
      level: 'error',
    });
  }
}

/**
 * Allows to update a particular role.
 *
 * @param id   Role id that needs to be updated.
 * @param data Updated role object.
 */
async function update(id, data) {
  try {
    return Role.update(id, data);
  } catch (error) {
    logger.log({
      message: 'Error occured in update method in role controller',
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
