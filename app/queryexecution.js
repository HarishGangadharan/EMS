const connection = require('../config/connection');

const executeQuery = (nativeQuery) => new Promise((resolve, reject) => {
  // eslint-disable-next-line consistent-return
  connection.query(nativeQuery, (err, data) => {
    if (err) return reject(err);
    resolve(data);
  });
});

module.exports = {
  executeQuery,
};
