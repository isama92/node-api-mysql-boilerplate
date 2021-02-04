const httpStatus = require('http-status');
const { isDev } = require('../config/vars');

module.exports = (req, res, next) => {
    if (!isDev) {
        return res.status(httpStatus.FORBIDDEN).send();
    }

    return next();
};
