const  path = require('path');

/**
 * Setting for simple-node-logger
 */
const fileLogger = require('simple-node-logger').createRollingFileLogger({
  logDirectory: path.join(__dirname, '../../logs'),
  fileNamePattern: 'GetirCaseStudy-<DATE>.log',
  dateFormat: 'YYYY.MM.DD'
});

/**
 * Global logger it'll contain multiple properties as per the requirements.
 */
const log = {};
module.exports = { log };

/**
 * INFO log
 * @param msg - Message
 */
log.info = (msg) => {
  fileLogger.info(msg);
};

/**
 * ERROR log
 * @param msg - Message
 */
log.error = (msg) => {
  fileLogger.error(msg);
};

/**
 * WARN log
 * @param msg - Message
 */
log.warn = (msg) => {
  fileLogger.warn(msg);
};

/**
 * DEBUG log
 * @param msg - Message
 */
log.debug = (msg) => {
  fileLogger.debug(msg);
};
