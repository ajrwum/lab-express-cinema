// loading Router from express library
const { Router } = require('express');

// loading the db and model to get the movies
const mongoose = require('mongoose');
const Movie = require('./../models/Movie.model');

// creating an instance of router
const router = Router();

// defining the route and what to do when called
router.get('/', (req, res, next) => {
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

// exporting to access it from elsewhere if necessary
module.exports = router;
