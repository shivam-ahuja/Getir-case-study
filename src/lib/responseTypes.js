/**
 * Create Success response object
 * @param {number} code
 * @param {string} message
 * @param {Object} data
 */
exports.createSuccessResponse = (code, message, data) => {
  return {
    code,
    msg: message,
    ...data
  };
};


/**
 * Create Error response object
 * @param {number} code
 * @param {string} message
 */
exports.createErrorResponse = (code, message) => {
  return {
    code,
    msg: message
  };
};

