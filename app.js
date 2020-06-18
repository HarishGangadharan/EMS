const express = require('express');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const timestamp = require('./middlewares/timestamp');
const serverRouter = require('./route');
const logger = require('./config/logger');

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(timestamp);

const dir = './logs';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

process.on('uncaughtException', (err) => {
  logger.log({
    message: err,
    level: 'error',
  });
});

process.on('unhandledException', (err) => {
  logger.log({
    message: err,
    level: 'error',
  });
});

app.use('/', serverRouter);

const server = http.createServer(app);
server.listen('6000');

module.exports = app;
