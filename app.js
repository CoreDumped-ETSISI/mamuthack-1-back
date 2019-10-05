const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/ofertRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/ofert', userRoutes);

module.exports = app;
