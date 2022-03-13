const { signUp, getSignUp } = require('./signUp');
const { getLogin, login } = require('./login');
const CustomizedError = require('../CustomizedError/CustomizedError');
const { clientError, serverError } = require('./error');
const addPost = require('./posts/addPost');
const getPost = require('./posts/getPost');
const deletePost = require('./posts/deletePost');

module.exports = {
  signUp,
  CustomizedError,
  getSignUp,
  getLogin,
  login,
  addPost,
  getPost,
  deletePost,
  clientError,
  serverError,
};
