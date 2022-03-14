const connection = require('../../config/connection');

// eslint-disable-next-line camelcase
const insertPostQuery = (title, post, communities, user_id) => connection.query('INSERT INTO posts (title, post, communities, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [title, post, communities, user_id]);

module.exports = insertPostQuery;
