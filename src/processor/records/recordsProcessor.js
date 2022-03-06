const moment = require('moment');
const RecordsDao = require('../../dao/records');

/**
 * Get desired records from DB
 * @param{Object} reqBody
 * @returns {Array} records
 */
module.exports.getRecords = async (reqBody) => {

  let {
    startDate,
    endDate,
    minCount,
    maxCount
  } = reqBody;

  // convert YYYY-MM-DD to iso date format
  startDate = moment(startDate, 'YYYY-MM-DD').toISOString();
  endDate = moment(endDate, 'YYYY-MM-DD').toISOString();

  // get records from DB
  return await RecordsDao.getRecords({minCount, maxCount, startDate, endDate});
};
