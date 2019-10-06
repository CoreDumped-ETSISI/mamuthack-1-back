const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/offerRoutes');

const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type', '*'])
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/offer', userRoutes);

module.exports = app;
