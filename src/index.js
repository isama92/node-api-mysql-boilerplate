// eslint-disable-next-line no-global-assign
Promise = require('bluebird');
const { port, nodeEnv } = require('./config/vars');
const app = require('./config/express');

// listen to requests
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${port} (${nodeEnv})`);
});
