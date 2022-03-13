const connection = require('../config/connection');

const addUserQuery = (name, email, password) => connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);

module.exports = addUserQuery;
