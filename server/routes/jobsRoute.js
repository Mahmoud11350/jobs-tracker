const express = require("express");
const {
  createJob,
  getAlljobs,
  getJob,
  editJob,
  deleteJob,
} = require("../controllers/jobs");

const router = express.Router();

router.route("/").get(getAlljobs).post(createJob);
router.route("/:id").get(getJob).patch(editJob).delete(deleteJob);

module.exports = router;
