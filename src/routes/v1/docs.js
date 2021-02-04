const express = require('express');
const swaggerUi = require('swagger-ui-express');
const onlyDev = require('../../middlewares/onlyDev');

let swaggerDocument;

try {
    // eslint-disable-next-line global-require
    swaggerDocument = require('../../../docs/swagger.json');
} catch (e) {
    swaggerDocument = null;
}

const router = express.Router();

router.use('/docs', onlyDev, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
