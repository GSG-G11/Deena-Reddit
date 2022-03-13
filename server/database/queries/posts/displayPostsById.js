const connection = require('../../config/connection');

const displayPostsById = (id) => connection.query('SELECT u.name, p.title, p.post,p.date FROM posts p JOIN users u ON (u.id = p.user_id) WHERE p.id = $1', [id]);

module.exports = displayPostsById;
