const express = require('express');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const timestamp = require('./middlewares/timestamp');
const serverRouter = require('./route');

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
  // eslint-disable-next-line no-console
  console.log(err);
});

process.on('unhandledException', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});

app.use('/', serverRouter);

const server = http.createServer(app);
server.listen('6000');

module.exports = app;
