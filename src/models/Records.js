var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const {Array, ObjectId} = mongoose.Schema.Types;

var recordsSchema = new Schema ({
  id: {
    type: ObjectId,
    required: true,
  },
  value: {
    type: String,
    required: true
  },
  count: {
    type: Array
  },
  createdAt: {
    type: String
  }
});

module.exports = mongoose.model('records', recordsSchema);
