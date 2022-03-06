const debug = require('debug')('api:routes');
const recordRoutes = require('./records');
const statusRoutes = require('./status');

const initRoutes = (app) => {
  app.use('/records', recordRoutes);
  app.use(statusRoutes);

  debug('Finished initializing routes...');
};

module.exports = initRoutes;
