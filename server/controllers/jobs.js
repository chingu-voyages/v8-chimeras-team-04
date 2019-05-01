const JobModel = require('../models/job');
const UserModel = require('../models/user');

const addNewJob = (req, res, next) => {
  const { position, company, username } = req.body;
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
      seeker: user.id,
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
  console.log('id',_id);
  let error = '';
  if (!_id) {
    error = 'job app id required.';
  }
  if (error) {
    return res.send({ error });
  }

  JobModel.findByIdAndDelete({ _id }).exec((err, apps)=> {
    if (apps !== null) {
      JobModel.find({ seeker: apps.seeker }).exec((err, apps) => {
        console.log('apps:', apps)
        res.send(apps);
      });
    } else {
      res.status(400).send();
    }
  });
}

const updateJob = (req, res, next) => {
  const { _id, position, company } = req.body;
  let error = '';
  if (!_id) {
    error = 'job app id required.';
  }
  if (error) {
    return res.send({ error });
  }

  JobModel.findByIdAndUpdate(_id, { position, company }).exec((err, apps)=> {
    if (apps !== null) {
      JobModel.find({ seeker: apps.seeker }).exec((err, apps) => {
        res.send(apps);
      });
    } else {
      res.status(400).send();
    }
  });
}



const getAllJobs = (req, res, next) => {
  const { currentUser } = req.body;

  JobModel.find({ seeker: currentUser.id }).exec((err, apps) => {
    res.send(apps);
  });
};

module.exports = {
  addNewJob,
  getAllJobs,
  removeJob,
  updateJob
};
