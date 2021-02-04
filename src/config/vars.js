require('dotenv').config();
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const accessLogStream = fs.createWriteStream(path.join(__dirname, '..', '..', 'logs', 'access.log'), { flags: 'a' });

const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT || 3000;
const clientUrl = process.env.CLIENT_URL;
const wm2DbUri = process.env.WM2_DB_URI;

const isDev = nodeEnv === 'development';
const isStag = nodeEnv === 'staging';
const isProd = nodeEnv === 'production';

const logs = {
    type: isDev ? 'dev' : 'combined',
    options: isDev ? {} : { stream: accessLogStream },
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
