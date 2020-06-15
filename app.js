/*jshint camelcase: false */
const express = require('express');
const http = require('http');
const serverRouter = require('./route');
const helmet = require("helmet");
var cors = require('cors');


const app = express();
app.use(helmet());
app.use(cors())


process.on('uncaughtException', (err) => {
    console.log(err);
})

process.on('unhandledException', (err) => {
    console.log(err);
})

app.use('/', serverRouter);

const server = http.createServer(app);
server.listen("6000");

module.exports = app;