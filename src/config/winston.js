const winston = require('winston');

const options = {
    combined: {
        level: 'info',
        filename: 'logs/combined.log',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    },
    error: {
        level: 'error',
        filename: 'logs/error.log',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    },
    access: {
        filename: 'logs/access.log',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        maxsize: 5242880, // 5MB
        maxFiles: 1,
    },
    console: {
        level: 'debug',
        format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.simple()),
        handleExceptions: true,
    },
};

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.File(options.combined), new winston.transports.File(options.error)],
    exitOnError: false,
});

// eslint-disable-next-line new-cap
const accessLogger = new winston.createLogger({
    transports: [new winston.transports.File(options.access)],
});

// cannot include vars (circular dependency problem)
if (process.env.NODE_ENV === 'development') {
    logger.add(new winston.transports.Console(options.console));
}

module.exports = logger;

module.exports.stream = {
    // eslint-disable-next-line no-unused-vars
    write(message) {
        accessLogger.info(message);
    },
};
