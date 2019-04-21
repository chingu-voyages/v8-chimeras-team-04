const jwt = require('jwt-simple');
const JobModel = require('../models/job');

const addNewJob = (req, res, next) => {
  const { position, company } = req.body;
  let error = '';

  if (!position || !company) {
    error = 'Fields are empty.';
  }

  if (error) {
    return res.send({ error });
  }

  const newJob = new JobModel({
    position,
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

const getAllJobs = (req, res, next) => {
  JobModel.find({}).then(data => {
    res.send(data);
  });
};

module.exports = {
  addNewJob,
  getAllJobs,
};
