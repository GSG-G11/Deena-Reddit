const addUserQuery = require('./addUserQuery');
const checkEmailQuery = require('./checkEmailQuery');
const checkUserQuery = require('./checkUserQuery');
const insertPostQuery = require('./posts/insertPostQuery');
const deletePostQuery = require('./posts/deletePostQuery');
const voteDecrease = require('./posts/voteDecrease');
const voteIncrease = require('./posts/voteIncrease');
const displayPostsOrderByVote = require('./posts/displayPostsOrderByVote');
const displayAllPostsQuery = require('./posts/displayAllPostsQuery');
const displayPostsById = require('./posts/displayPostsById');

module.exports = {
  addUserQuery,
  checkEmailQuery,
  checkUserQuery,
  insertPostQuery,
  deletePostQuery,
  voteDecrease,
  voteIncrease,
  displayPostsOrderByVote,
  displayAllPostsQuery,
  displayPostsById,
};
