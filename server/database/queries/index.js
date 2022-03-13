const addUserQuery = require('./addUserQuery');
const checkEmailQuery = require('./checkEmailQuery');
const checkUserQuery = require('./checkUserQuery');
const insertPostQuery = require('./posts/insertPostQuery');
const deletePostQuery = require('./posts/deletePostQuery');

module.exports = {
  addUserQuery,
  checkEmailQuery,
  checkUserQuery,
  insertPostQuery,
  deletePostQuery,
};
