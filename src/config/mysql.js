const { Sequelize } = require('sequelize');
const { dbUri } = require('./vars');
const logger = require('./winston');

const sequelize = new Sequelize(dbUri, {
    logging: (msg) => logger.info(msg),
});

sequelize
    .authenticate()
    .then(() => logger.debug('Connected to the DB.'))
    .catch((err) => logger.error('Unable to connect to the database:', err));

module.exports = sequelize;
