const { deletePostQuery } = require('../../database/queries');

const deletePost = (req, res, next) => {
  // if (!req.id) return res.status(401).json({ err: 'unauthorized' });
  const { id } = req.params;
  const userId = req.cookies.id;
  return deletePostQuery(id, userId).then(() => res.status(202).json({ msg: 'post Deleted Successfully' }))
    // eslint-disable-next-line consistent-return
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = deletePost;
