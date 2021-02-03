const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const routes = require('../routes');
const {
    isDev, clientUrl, logs,
} = require('./vars');



// Express instance
const app = express();



/** Middlewares */

// logs
app.use(morgan(logs));

// parse json body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// add responses' gzip compression
app.use(compression());

// sanitize input
app.use(xss());

// set responses' headers (improved security)
app.use(helmet());

if (isDev) {
    app.use(cors({ origin: clientUrl }));
} else {
    // TODO: non dev CORS
}



/** Routes */

app.use('/', routes);



module.exports = app;
