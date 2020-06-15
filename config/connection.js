const mysql = require('mysql');
const env = require('./index.json');

let connection = process.env.NODE_ENV == "development" ? "development" : "test";

const pool = mysql.createPool(env[connection]);

module.exports =  pool;