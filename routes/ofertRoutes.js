const express = require('express');
const ofertController = require('../controllers/ofertController');

const api = express.Router();

// Method and end of url needed to access each controller
api.get('/', ofertController.getOferts); // pilla todas las ofertas
api.get('/:ofertID', ofertController.getOfert); //pilla una oferta en concreto 
api.post('/', ofertController.createOfert); // publicar oferta
api.put('/:ofertID', ofertController.replaceOfert); // reclamar oferta
api.patch('/:ofertID', ofertController.editOfert); // cancelar oferta

module.exports = api;
