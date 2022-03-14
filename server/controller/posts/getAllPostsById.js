const { displayPostsById } = require('../../database/queries');

const getAllPostsById = (req, res, next) => {
  const { id } = req.params;
  return displayPostsById(id).then((data) => res.status(200).json(data.rows))
  // eslint-disable-next-line consistent-return
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = getAllPostsById;
