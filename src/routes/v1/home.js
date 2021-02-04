const express = require('express');
const controller = require('../../controllers/home');
const onlyDev = require('../../middlewares/onlyDev');

const router = express.Router();

router.get('/', controller.status);
router.get('/status', controller.status);
router.get('/test', onlyDev, controller.test);

module.exports = router;
