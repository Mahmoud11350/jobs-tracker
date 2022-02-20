const Job = require("../models/jobsModel");
const { NotFoundError, BadRequest } = require("../errors");

const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.json({ job });
};

const getAlljobs = async (req, res) => {
  const jobs = await Job.find({});
  if (!jobs) {
    throw Error("No Jobs created yet");
  }
  res.status(200).json({ jobs, nHits: jobs.length });
};
const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    throw new NotFoundError(`No job with the Provided id `);
  }
  res.status(200).send({ job });
};

const editJob = async (req, res) => {
  const keys = ["company", "position"];
  const updateKeys = Object.keys(req.body);
  const isUpdateOk = updateKeys.every((update) => keys.includes(update));
  if (!isUpdateOk) {
    throw new BadRequest("Not Valid Update ");
  }
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    revalidate: true,
  });
  if (!job) {
    throw new NotFoundError("No job with the Provided id ");
  }

  res.json({ job });
};

const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    throw new NotFoundError(`No job with the Provided id `);
  }
  res.json({ job });
};

module.exports = {
  createJob,
  getAlljobs,
  getJob,
  editJob,
  deleteJob,
};
