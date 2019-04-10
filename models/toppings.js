const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const toppingsSchema = new Schema({
  toppings: {
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

const ToppingsModel = mongoose.model('toppings', toppingsSchema);
module.exports = ToppingsModel;