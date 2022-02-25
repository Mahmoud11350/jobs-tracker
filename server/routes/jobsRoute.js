const express = require("express");
const {
  createJob,
  getAlljobs,
  getJob,
  editJob,
  deleteJob,
} = require("../controllers/jobs");

const jobsRouter = express.Router();

jobsRouter.route("/").get(getAlljobs).post(createJob);
jobsRouter.route("/:id").get(getJob).patch(editJob).delete(deleteJob);

module.exports = jobsRouter;
