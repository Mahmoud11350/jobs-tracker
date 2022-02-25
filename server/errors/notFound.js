const CustomAPIError = require("./custom-error");

class NotFoundError extends CustomAPIError {
  constructor(msg) {
    super(msg);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
