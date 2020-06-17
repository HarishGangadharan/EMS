const mysql = require('mysql');
const env = require('./index.json');

let connection = process.env.NODE_ENV == "development" ? "development" : "test";

const pool = mysql.createPool({
  host: env[connection].host,
  user: env[connection].user,
  password: env[connection].password,
  database: env[connection].database,
  connectionLimit : 10,
  queryFormat: function (query, values) {
    if (!values) return query;
      return query.replace(/\:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
          return this.escape(values[key]);
        }
        return txt;
      }.bind(this));
    }
});

module.exports =  pool;