const connection = require('../../config/connection');

const deletePostQuery = (id, userId) => connection.query('DELETE FROM posts WHERE id = $1 and user_id = $2', [id, userId]);

module.exports = deletePostQuery;
