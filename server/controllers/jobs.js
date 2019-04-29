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

const getAllJobs = (req, res, next) => {
  const { currentUser } = req.body;

  JobModel.find({ seeker: currentUser.id }).exec((err, apps) => {
    res.send(apps);
  });
};

module.exports = {
  addNewJob,
  getAllJobs,
};
