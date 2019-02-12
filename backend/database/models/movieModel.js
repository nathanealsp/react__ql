const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  year: String,
  genre: String,
  // certificate: String,
  // runtime: String,
  // blob: String,
  // directorId: String,
  // stars: String,
});

// We export the model
// This will create a collection of movies that will look based off of the movieSchema
module.exports = mongoose.model('Movie', movieSchema);
