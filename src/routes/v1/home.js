const express = require('express');
const controller = require('../../controllers/home');

const router = express.Router();

router.get('/', controller.status);
router.get('/status', controller.status);

module.exports = router;
