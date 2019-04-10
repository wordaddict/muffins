const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const variantsSchema = new Schema({
  variants: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: moment()
  },
  updatedAt: {
    type: Date,
    default: moment(),
    select: false
  }
});

const VariantsModel = mongoose.model('variants', variantsSchema);
module.exports = VariantsModel;