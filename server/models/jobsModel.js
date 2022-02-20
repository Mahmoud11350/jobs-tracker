const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Company name must be provided"],
  },
  position: {
    type: String,
    required: [true, "position name must be provided"],
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Job", jobSchema);
