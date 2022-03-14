const { voteIncrease } = require('../../database/queries');

const increaseVote = (req, res, next) => {
  if (!req.id) return res.status(401).json({ err: 'unauthorized' });
  const { id } = req.params;
  return voteIncrease(id).then(() => res.status(200).json({ msg: 'vote increasing Successfully' }))
  // eslint-disable-next-line consistent-return
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = increaseVote;
