const errorHandler = (err, req, res, next) => {
  let customerror = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Something Went Wrong Try Again Later",
  };

  if (err.name === "ValidationError") {
    customerror.msg = Object.keys(err.errors)
      .map((error) => {
        return err.errors[error].message;
      })
      .join(" & ");
  }

  if (err.name == "CastError") {
    customerror.msg = "Please provide right id form";
  }
  if (err.code && err.code === 11000) {
    customerror.msg = "Please provide Unique Email";
  }
  return res.status(customerror.statusCode).json({ msg: customerror.msg });
  // return res.status(500).send(err);
};

module.exports = errorHandler;
