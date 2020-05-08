const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

require('./database/index');
require('dotenv').config();

// Frontend configs.
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parser configs.
app.use(bodyParser.text({ defaultCharset: 'utf-8' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

module.exports = app;