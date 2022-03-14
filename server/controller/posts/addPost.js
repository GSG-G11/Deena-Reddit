const { insertPostQuery } = require('../../database/queries');
const { addPostSchema } = require('../../validation');

const addPost = (req, res, next) => {
  addPostSchema.validateAsync(req.body).then((value) => {
    const { title, post, communities } = value;
    const userId = req.id;
    insertPostQuery(title, post, communities, userId).then(() => {
      res.status(201).json({ message: 'post created' });
    })
      // eslint-disable-next-line consistent-return
      .catch((error) => {
        if (error.status) return res.status(error.status).json(error.message);
        next();
      });
  });
};

module.exports = addPost;
