const { signUp, getSignUp } = require('./signUp');
const CustomizedError = require('../CustomizedError/CustomizedError');
const { clientError, serverError } = require('./error');

module.exports = {
  signUp,
  CustomizedError,
  getSignUp,
  clientError,
  serverError,
};
