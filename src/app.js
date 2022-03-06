const express = require('express');
const errorHandler = require('errorhandler');
const moment = require('moment');
const Debug = require('debug');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Load .env  .${process.env.NODE_ENV}
const initMiddleware = require('./config/middleware');
const initRoutes = require('./routes/index');
const initDatabase = require('./config/database');
const debug = Debug('WDL:app');

const app = express();

app.use(errorHandler());

app.locals.moment = moment;

// Middleware
initMiddleware(app);

// Database
initDatabase();

// Routes
initRoutes(app);

app.use((req, res, next) => {
  const err = new Error('The requested url was not found on this server');
  err.status = 404;
  next(err);
});

const server = app.listen(process.env.PORT || '5000', () => debug(`Server running on port ${process.env.PORT || 5000}`));

module.exports = server;
