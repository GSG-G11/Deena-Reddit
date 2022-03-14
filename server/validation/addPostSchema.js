const joi = require('joi');

const addPostSchema = joi.object({
  title: joi.string().required(),
  post: joi.string().required(),
  vote: joi.number(),
  communities: joi.string().required(),
  user_id: joi.number().required(),
});

module.exports = addPostSchema;
