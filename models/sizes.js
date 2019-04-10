const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const sizesSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  price: {
    type: Number
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

const SizesModel = mongoose.model('sizes', sizesSchema);
module.exports = SizesModel;