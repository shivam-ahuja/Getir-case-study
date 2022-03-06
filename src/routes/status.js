const express = require('express');
const router = express.Router();

/**
 * Get status (/status)
 * @param {Object} req
 * @param {Object} res
 */
router.get('/status', async (req, res) => {
  res.status('200').send('Welcome to Getir Case study');
});

module.exports = router;
