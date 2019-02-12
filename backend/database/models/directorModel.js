const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create a schema - of how the data is going to look in the db
const directorSchema = new Schema({
  name: String,
  movie: String,
  movies: String,
});

// This will create a collection of movies that will look based off of the directorSchema
module.exports = mongoose.model('Directors', directorSchema);
