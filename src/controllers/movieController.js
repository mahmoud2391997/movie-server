// src/controllers/movieController.js
let movies = [];

// Get all movies
exports.getAllMovies = (req, res) => {
  res.json(movies);
};

// Add a new movie
exports.addMovie = (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  console.log(title);
  const id = movies.length + 1;
  const newMovie = { id, title };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

// Update a movie
exports.updateMovie = (req, res) => {
  const { id } = req.params;
  const title = req.body.edited;
  console.log(req.body);
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
  movie.title = title;
  res.json(movie);
};

// Delete a movie
exports.deleteMovie = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const movieIndex = movies.findIndex((movie) => movie.id === parseInt(id));
  if (movieIndex === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }
  const deletedMovie = movies.splice(movieIndex, 1);
  res.json(deletedMovie[0]);
};
