const JobModel = require('../models/job');
const UserModel = require('../models/user');

const addNewJob = (req, res, next) => {
  const { position, company, username, notes } = req.body;
  let error = '';

  if (!position || !company) {
    error = 'Fields are empty.';
  }

  if (error) {
    return res.send({ error });
  }

  UserModel.findOne({ username }, (err, user) => {
    const newJob = new JobModel({
      position,
      company,
      stage: 'submitted',
      seeker: user.id,
      notes,
      dates: new Date(),
    });

    newJob.save(saveError => {
      JobModel.find({ seeker: user.id }).exec((err, apps) => {
        res.send(apps);
      });
    });
  });
};

const removeJob = (req, res, next) => {
  const { _id } = req.body;
  let error = '';
  if (!_id) {
    error = 'job app id required.';
  }
  if (error) {
    return res.send({ error });
  }

  JobModel.findByIdAndDelete({ _id }).exec((err, apps) => {
    if (apps !== null) {
      JobModel.find({ seeker: apps.seeker }).exec((err, apps) => {
        res.send(apps);
      });
    } else {
      res.status(400).send();
    }
  });
};

const updateJob = (req, res, next) => {
  const { _id, position, company } = req.body;
  let error = '';
  if (!_id) {
    error = 'job app id required.';
  }
  if (error) {
    return res.send({ error });
  }

  JobModel.findByIdAndUpdate(_id, { position, company }).exec((err, apps) => {
    if (apps !== null) {
      JobModel.find({ seeker: apps.seeker }).exec((err, apps) => {
        res.send(apps);
      });
    } else {
      res.status(400).send();
    }
  });
};

const getAllJobs = (req, res, next) => {
  const { currentUser } = req.body;

  JobModel.find({ seeker: currentUser.id }).exec((err, apps) => {
    res.send(apps);
  });
};

const updateStage = (req, res, next) => {
  const { id, name } = req.body;
  let stage;
  if (name === 'App Submitted') stage = 'submitted';
  if (name === 'Code Challenge') stage = 'challenge';
  if (name === 'Phone Interview') stage = 'phone';
  if (name === 'Offer') stage = 'offer';
  if (name === 'Onsite') stage = 'onsite';

  if (name)
    JobModel.findByIdAndUpdate(id, { stage }).exec((err, apps) => {
      if (apps !== null) {
        JobModel.find({ seeker: apps.seeker }).exec((err, apps) => {
          res.send(apps);
        });
      } else {
        res.status(400).send();
      }
    });
};

module.exports = {
  addNewJob,
  getAllJobs,
  removeJob,
  updateJob,
  updateStage,
};
