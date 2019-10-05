const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/offerRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/offer', userRoutes);

module.exports = app;
