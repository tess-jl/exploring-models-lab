const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  leaves: {
    type: Number,
    required: true,
    min: 1
  },
  roots: {
    type: Number,
    required: true,
    min: 1
  },
  branches: {
    type: Number,
    required: true
  },
  trunk: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tree', schema);
