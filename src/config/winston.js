const winston = require('winston');
const { isDev } = require('./vars');

const options = {
    combined: {
        level: 'info',
        filename: 'logs/combined.log',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    },
    error: {
        level: 'error',
        filename: 'logs/error.log',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    },
    console: {
        level: 'debug',
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.simple(),
        ),
        handleExceptions: true
    },
};

const logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File(options.combined),
        new winston.transports.File(options.error),
    ],
    exitOnError: false
});

if(isDev) {
    logger.add(new winston.transports.Console(options.console));
}

module.exports = logger;
