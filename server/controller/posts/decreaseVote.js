const { voteDecrease } = require('../../database/queries');

const decreaseVote = (req, res, next) => {
  // if (!req.id) return res.status(401).json({ err: 'unauthorized' });
  const { id } = req.params;
  return voteDecrease(id).then((data) => res.status(200).json(data.rows[0]))
  // eslint-disable-next-line consistent-return
    .catch((error) => {
      console.log(error);
      // if (error.status) return res.status(error.status).json(error.message);
      // next();
    });
};

module.exports = decreaseVote;
