const connection = require('../config/connection');

/**
 * Execute the given query and returns the promise.
 *
 *  @param  nativeQuery    Native query to be executed
 *  @param  inputData      Input details for the query
 */
const executeQuery = (nativeQuery, inputData) => new Promise((resolve, reject) => {
  // eslint-disable-next-line consistent-return
  connection.query(nativeQuery, inputData, (err, data) => {
    if (err) return reject(err);
    resolve(data);
  });
});

module.exports = {
  executeQuery,
};
