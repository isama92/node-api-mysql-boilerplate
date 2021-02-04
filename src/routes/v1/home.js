const express = require('express');
const swaggerUi = require('swagger-ui-express');
const controller = require('../../controllers/home');
const swaggerDocument = require('../../../docs/swagger.json');
const onlyDev = require('../../middlewares/onlyDev');

const router = express.Router();

router.get('/', controller.status);
router.get('/status', controller.status);
router.use('/docs', onlyDev, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/test', onlyDev, controller.test);

module.exports = router;
