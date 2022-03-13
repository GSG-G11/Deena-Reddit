const { signUp, getSignUp } = require('./signUp');
const { getLogin, login } = require('./login');
const CustomizedError = require('../CustomizedError/CustomizedError');
const { clientError, serverError } = require('./error');

module.exports = {
  signUp,
  CustomizedError,
  getSignUp,
  getLogin,
  login,
  clientError,
  serverError,
};
