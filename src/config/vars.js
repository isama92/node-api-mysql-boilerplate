require('dotenv').config();

const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT || 3000;
const clientUrl = process.env.CLIENT_URL;

const isDev = nodeEnv === 'development';
const isStag = nodeEnv === 'staging';
const isProd = nodeEnv === 'production';
const logs = isDev ? 'dev' : 'combined';

module.exports = {
    nodeEnv,
    port,
    clientUrl,

    isDev,
    isStag,
    isProd,
    logs,
};
