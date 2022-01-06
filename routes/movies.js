// loading Router from express library
const { Router } = require('express');

// loading the db and model to get the movies
const mongoose = require('mongoose');
const Movie = require('./../models/Movie.model');

// creating an instance of router
const router = Router();

// defining the route and what to do when called
router.get('/movies', (req, res, next) => {
  // getting all the movies from db
  Movie.find()
  .then ((foundMovies) => {
    // loading the page movies, passing the movies list
    res.render('movies', {
      allMovies: foundMovies
    });
  })
  .catch (e => console.error(e))
});

// defining the route for one movie
router.get('/movie/:id', (req, res, next) => {
  // checking the id
  const isValidId = mongoose.isValidObjectId(req.params.id);
  if (isValidId) {
    // getting the clicked movie from the db
    Movie.findById(req.params.id)
    .then((clickedMovie) => {
      // easing the way to display the showtimes as expected
      const times = clickedMovie.showtimes;
      const showtimesText = times.length ? times.join(' | ') : "";
      // loading the page movie, passing the movie details
      res.render('movie', {
        movie: clickedMovie,
        showtimesText
      });
    })
    .catch(e => console.error(e))
  }
  else {
    throw new Error('Invalid id');
  }
});

// exporting to access it from elsewhere if necessary
module.exports = router;
