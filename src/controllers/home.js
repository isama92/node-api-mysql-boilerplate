const httpStatus = require('http-status');
const User = require('../models/user');

exports.status = (req, res) => {
    return res
        .status(httpStatus.OK)
        .json({ status: 'OK' });
};

exports.test = async (req, res) => {
    const user = await User.findByPk(1);
    return res
        .status(httpStatus.OK)
        .json({ test: user });
};
