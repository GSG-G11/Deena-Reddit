/* eslint-disable camelcase */
const { insertComment } = require('../../database/queries');

const addComment = (req, res, next) => {
  const { content, post_id } = req.body;
  console.log(req.body);
  const userId = req.id;
  insertComment(content, post_id, userId)
    .then((data) => console.log(data.rows))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = addComment;
