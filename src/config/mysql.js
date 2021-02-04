const { Sequelize } = require('sequelize');
const { wm2DbUri } = require('./vars');
const logger = require('./winston');

const sequelize = new Sequelize(wm2DbUri, {
    logging: (msg) => logger.info(msg),
});

sequelize
    .authenticate()
    .then(() => logger.debug('Connected to the DB.'))
    .catch((err) => logger.error('Unable to connect to the database:', err));

module.exports = sequelize;
