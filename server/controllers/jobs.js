const jwt = require('jwt-simple');
const JobModel = require('../models/job');

const addNewJob = (req, res, next) => {
	const { title, company } = req.body;
	let error = '';

	if (!title || !company) {
		error = 'Fields are empty.';
	}

	if (error) {
		return res.send({ error });
	}

	const newJob = new JobModel({
		title,
		company,
	});

	newJob.save(saveError => {
		if (saveError) {
			return next(saveError);
		}

		res.json({
			newJob,
		});
	});
};

module.exports = {
	addNewJob,
};
