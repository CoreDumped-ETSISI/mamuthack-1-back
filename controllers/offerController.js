/* eslint-disable consistent-return */

const Offer = require('../models/offer');

// Get offer object
function getOffers(req, res) {
  // Finds all offers in the database
  Offer.find({}, (err, offers) => {
    if (err) return res.status(500).send({ message: `Error on request: ${err}` });
    if (!offers) return res.status(404).send({ message: 'No offers found' });

    return res.status(200).send(offers);
  });
}

// Get offer object by ID
function getOffer(req, res) {
  const { offerId } = req.params;

  if (!offerId) return res.status(400).send({ message: 'Missing params' });

  // Finds the offer with the id provided
  Offer.findById({ _id: offerId }, (err, offer) => {
    if (err) return res.status(404).send({ message: `No offers found: ${err}` });

    return res.status(200).send(offer);
  });
}

function getOfferPublisher(req, res){
  const mypublisher = req.params.publisher;

  if (!mypublisher) return res.status(400).send({ message: 'Missing params' });

  // Finds the offer with the id provided
  Offer.find({ publisher: mypublisher }, (err, offers) => {
    if (err) return res.status(404).send({ message: `No offers found: ${err}` });

    return res.status(200).send(offers);
  });
}

function getClaimClaimant(req, res){
  const myclaimant = req.params.claimant;

  if (!myclaimant) return res.status(400).send({ message: 'Missing params' });

  // Finds the offer with the id provided
  Offer.find({ claimant: myclaimant }, (err, claims) => {
    if (err) return res.status(404).send({ message: `No claims found: ${err}` });

    return res.status(200).send(claims);
  });
}

// Create and save a new offer
function createOffer(req, res) {
  const { description } = req.body;
  const { coordinates } = req.body;
  const { labels } = req.body;
  const { contains } = req.body;
  const { servings } = req.body;
  const { title } = req.body;
  const { publisher } = req.body;

  const status = 'pub'
  const photo = "https://www.deliciosi.com/images/100/119/sopa-de-champi%C3%B1ones.jpg";


  if (!photo || !status || !description || !servings || !title) {
    return res.status(400).send({ message: 'Missing params' });
  }

  const offer = new Offer({
    photo,
    status,
    description,
    coordinates,
    labels,
    contains,
    servings,
    title,
    publisher
  });

  console.log(offer)

  // Save the new offer
  offer.save((err2, newOffer) => {
    if (err2) return res.status(500).send({ message: `Error saving offer ${err2}` });
    if (!newOffer) return res.status(500).send({ message: 'No offer to save' });

    return res.status(200).send({ message: 'offer saved', newOffer });
  });

  // Checks if the offer already exist
  /*Offer.findOne({ email }, (err1, offerExist) => {
    if (err1) return res.status(500).send({ message: `Error finding offer ${err1}` });
    if (offerExist) return res.status(409).send({ message: 'Offer already exist' });

    // Create a new offer
    const offer = new Offer({
      photo,
      status,
      description,
      coordinates,
      labels,
      contains
    });

    // Save the new offer
    offer.save((err2, newOffer) => {
      if (err2) return res.status(500).send({ message: `Error saving offer ${err2}` });
      if (!newOffer) return res.status(500).send({ message: 'No offer to save' });

      return res.status(200).send({ message: 'offer saved', newOffer });
    });
  });*/
}

// Replace the offer information
function replaceOffer(req, res) {
  const { photo } = req.body;
  const { status } = req.body;
  const { description } = req.body;
  const { location } = req.body;
  const { labels } = req.body;

  if (!photo || !status || !description || !location || !labels) {
    return res.status(400).send({ message: 'Missing params' });
  }

  // Create the new offer
  const offerReplace = {
    photo,
      status,
      description,
      location,
      labels,
  };

  offer.findById(offerId, (err1, offer) => {
    if (err1) return res.status(404).send({ message: `No offer found: ${err1}` });

    // Replaces the offer
    offer.replaceOne(offerReplace, (err2) => {
      if (err2) return res.status(500).send({ message: `Error replacing offer ${err2}` });

      return res.status(200).send({ message: 'offer replaced' });
    });
  });
}

// Update the offer information
function editOffer(req, res) {
  let offerId = req.params.offerId;
  const updatedFields = {};

  const { photo } = req.body;
  const { status } = req.body;
  const { description } = req.body;
  const { labels } = req.body;
  const { claimant } = req.body;

  if (status) updatedFields.status = req.body.status;
  if (claimant) updatedFields.claimant = req.body.claimant;
  if (photo) updatedFields.photo = req.body.photo;
  if (description) updatedFields.description = req.body.description;
  if (labels) updatedFields.labels = req.body.labels;

  // Update the offer
  Offer.findByIdAndUpdate(offerId, updatedFields, (err) => {
    if (err) return res.status(500).send({ message: `Error finding offer ${err}` });

    return res.status(200).send({ message: 'offer updated' });
  });
}

module.exports = {
  getOffer,
  getOffers,
  createOffer,
  replaceOffer,
  editOffer,
  getOfferPublisher,
  getClaimClaimant
};
