const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
  position: String,
  company: String,
});

module.exports = mongoose.model('job', JobSchema);
