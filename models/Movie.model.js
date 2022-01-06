// loading elements from library
const { model, Schema } = require('mongoose');

// creating Schema (from observing the data)
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [ String ],
  image: String,
  description: String,
  showtimes: [ String ]
});

// creating the db model for movies
const Movie = model("Movie", movieSchema);

// exporting to be able to access it when necessary
module.exports = Movie;
