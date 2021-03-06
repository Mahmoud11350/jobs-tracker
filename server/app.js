const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const auth = require("./middleware/auth");
const jobRouter = require("./routes/jobsRoute");
const userRouter = require("./routes/userRoute");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>JObS_TRACKER_API</h1>`);
});
app.use("/api/v1/jobs", auth, jobRouter);
app.use("/api/v1/users", userRouter);

//middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    connectDB(process.env.DATABASE_CONNECTION);
    app.listen(PORT, () => console.log("Server Is Up On Port " + PORT));
  } catch (error) {
    console.log("Database connection fild");
  }
};

start();
