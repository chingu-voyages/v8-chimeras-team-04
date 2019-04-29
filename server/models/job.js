const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
  position: String,
  company: String,
  seeker: { type: Schema.Types.ObjectId, ref: 'Person' },
});

module.exports = mongoose.model('job', JobSchema);
