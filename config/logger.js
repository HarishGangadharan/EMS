const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new (winston.transports.DailyRotateFile)({
  filename: './logs/error/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '20m',
});

const logger = winston.createLogger({
  transports: [
    transport,
  ],
});

module.exports = logger;
