const express = require('express');
const { join } = require('path');
const router = require('./router/router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ urlencoded: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 3333);
app.use(router);

module.exports = app;
