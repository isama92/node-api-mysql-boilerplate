const express = require('express');
const v1Routes = require('./v1');
const homeController = require('../controllers/home');

const router = express.Router();

router.get('/', homeController.status);
router.use('/v1', v1Routes);

module.exports = router;
