const { Sequelize } = require('sequelize');
const { wm2DbUri } = require('./vars');
const logger = require('./winston');

const sequelize = new Sequelize(wm2DbUri, {
    logging: msg => logger.info(msg),
});

try {
    sequelize.authenticate();
    logger.debug('Connection has been established successfully.');
} catch (error) {
    logger.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
