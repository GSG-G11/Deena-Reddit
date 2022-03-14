const connection = require('../../config/connection');

const displayAllPostsQuery = () => connection.query('SELECT u.name, p.title, p.post,p.date FROM posts p JOIN users u ON (u.id = p.user_id)');

module.exports = displayAllPostsQuery;
