const { stream } = require('./winston');

const nodeEnv = process.env.NODE_ENV;
const isDev = nodeEnv === 'development';
const isStag = nodeEnv === 'staging';
const isProd = nodeEnv === 'production';

if (isDev) {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}

const port = process.env.PORT || 3000;
const clientUrl = process.env.CLIENT_URL;
const wm2DbUri = process.env.WM2_DB_URI;

const logs = {
    type: isDev ? 'dev' : 'combined',
    options: isDev ? {} : { stream },
};

module.exports = {
    nodeEnv,
    port,
    clientUrl,
    wm2DbUri,

    isDev,
    isStag,
    isProd,
    logs,
};
