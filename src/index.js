// eslint-disable-next-line no-global-assign
Promise = require('bluebird');
const { port, nodeEnv } = require('./config/vars');
const app = require('./config/express');
const logger = require('./config/winston');

// listen to requests
app.listen(port, () => {
    // eslint-disable-next-line no-console
    logger.info(`Server is running on port ${port} (${nodeEnv})`);
});
