const { isDev } = require('../config/vars');
const httpStatus = require('http-status');

module.exports = (req, res, next) => {
    if(!isDev) {
        return res.status(httpStatus.FORBIDDEN).send();
    }

    return next();
};
