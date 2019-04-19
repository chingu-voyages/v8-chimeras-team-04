const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
	title: String,
	company: String,
});

module.exports = mongoose.model('job', JobSchema);
