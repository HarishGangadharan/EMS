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

/**
 * Create a logs folder if not exist.
 *
 */
const dir = './logs';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

/**
 * Capture all the uncaught exception if it is not handled.
 *
 * @param err Error which is occured
 */
process.on('uncaughtException', (err) => {
  logger.log({
    message: err,
    level: 'error',
  });
});

/**
 * Capture all the unhandled exception if it is not handled.
 *
 * @param err Error which is occured
 */
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
