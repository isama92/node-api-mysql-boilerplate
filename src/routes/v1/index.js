const express = require('express');
const homeRoutes = require('./home');
const docsRoutes = require('./docs');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/', docsRoutes);

module.exports = router;
