const records = require('../models/Records');

/**
 * Get records from DB
 * @param {Object} filters
 * @returns {Array} records
 */
exports.getRecords = async ({minCount, maxCount, startDate, endDate}) => {
  return await records.aggregate(
    [
      {
        '$project': {
          '_id': 0,
          'key': '$key',
          'createdAt': '$createdAt',
          'totalCount': {'$sum': '$counts'}
        }
      },
      {
        '$match': {
          'totalCount': {
            '$gte': minCount,
            '$lte': maxCount
          },
          'createdAt': {
            '$gte': new Date(startDate),
            '$lte': new Date(endDate)
          }
        }
      }
    ]
  );
};
