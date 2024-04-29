import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import { Box, Grid } from '@mui/material';

const MovieList = ({ movies, selectedLanguage, selectedCountry, selectedGenre }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    filterMovies();
  }, [movies, selectedLanguage, selectedCountry, selectedGenre]);

  const filterMovies = () => {
    let filtered = [...movies];

    if (selectedLanguage) {
      filtered = filtered.filter(movie => movie.movielanguages.includes(selectedLanguage));
    }

    if (selectedCountry) {
      filtered = filtered.filter(movie => movie.moviecountries.includes(selectedCountry));
    }

    if (selectedGenre) {
      filtered = filtered.filter(movie => movie.moviegenres.includes(selectedGenre));
    }

    setFilteredMovies(filtered);
  };

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        {/* Render filteredMovies instead of movies */}
        {filteredMovies.map(movie => (
          <Grid item key={movie.imdbmovieid} xs={12} sm={6} md={4} lg={3}>
            <MovieItem movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
