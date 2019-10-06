const express = require('express');
const offerController = require('../controllers/offerController');

const api = express.Router();

// Method and end of url needed to access each controller
api.get('/', offerController.getOffers); // pilla todas las oferta
api.get('/getOfferPublisher/:publisher', offerController.getOfferPublisher);
api.get('/getClaimClaimant/:claimant', offerController.getClaimClaimant);
api.get('/:offerId', offerController.getOffer); //pilla una oferta en concreto 
api.post('/', offerController.createOffer); // publicar oferta
api.put('/:offerId', offerController.replaceOffer); // reclamar oferta
api.patch('/:offerId', offerController.editOffer); // cancelar oferta

module.exports = api;
