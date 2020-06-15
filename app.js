/*jshint camelcase: false */
const express = require('express');
const http = require('http');
const serverRouter = require('./route');
const app = express();

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