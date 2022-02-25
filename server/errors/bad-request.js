const CustomApiError = require("./custom-error");

class BadRequest extends CustomApiError {
  constructor(msg) {
    super(msg);
    this.statusCode == 400;
  }
}

module.exports = BadRequest;
