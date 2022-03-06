const express = require('express');
const router = express.Router();
const Joi = require('joi').extend(require('@joi/date'));
const recordsProcessor = require('../processor/records/recordsProcessor');
const log = require('../lib/logger/fileLog').log;
const responseTypes = require('../lib/responseTypes');

/**
 * Get records ("/records/get")
 * @param {Object} req
 * @param {Object} res
 */
router.post('/get', async (req, res) => {

  const data = req.body;

  // define schema for validation
  const schema = Joi.object({
    minCount: Joi.number().strict(true).required(),
    maxCount: Joi.number().strict(true).required(),
    startDate: Joi.date().format('YYYY-MM-DD').required(),
    endDate: Joi.date().format('YYYY-MM-DD').required()
  });

  // validate schema
  const {error} = schema.validate(data);

  if (error) {
    // schema invalid - send error
    log.error(`Error in schema validation: ${error.details[0].message}`);
    res.status(400).send(responseTypes.createErrorResponse(400, `Validation error: ${error.details[0].message}`));
  } else {
    // schema valid - get records
    try {
      let records = await recordsProcessor.getRecords(req.body);
      res.status(200).send(responseTypes.createSuccessResponse(0, 'Success', {records: records}));
    } catch (e) {
      // error in get records
      log.error(`Error in recordsProcessor.getRecords: ${e.message}`);
      res.status(500).send(responseTypes.createErrorResponse(500, 'Something Snapped! please try again'));
    }
  }
});

module.exports = router;
