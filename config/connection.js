const mysql = require('mysql');
const env = require('./index.json');

const connection = process.env.NODE_ENV === 'development' ? 'development' : 'test';

const pool = mysql.createPool({
  host: env[connection].host,
  user: env[connection].user,
  password: env[connection].password,
  database: env[connection].database,
  connectionLimit: 10,
});

module.exports = pool;
