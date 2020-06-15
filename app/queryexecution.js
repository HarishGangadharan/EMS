const connection = require("../config/connection");

const executeQuery = (native_query) => {
    return new Promise((resolve, reject) => {
    connection.query(native_query, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

module.exports = {
    executeQuery 
}