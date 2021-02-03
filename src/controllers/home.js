const httpStatus = require('http-status');

exports.status = (req, res) => {
    return res
        .status(httpStatus.OK)
        .json({ status: 'OK' });
};

exports.test = async (req, res) => {
    return res
        .status(httpStatus.OK)
        .json({ test: true });
};
