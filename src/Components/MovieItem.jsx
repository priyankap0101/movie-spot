import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MovieItem = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="relative w-64 h-auto m-2 overflow-hidden transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={movie.moviemainphotos[0]}
        alt={movie.movietitle}
        className="object-cover w-full h-80"
      />
      {isHovered && (
        <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-75">
          <Typography variant="h6" gutterBottom>
            {movie.movietitle}
          </Typography>
          <Typography variant="body2">
            <span className="font-semibold">Languages:</span> {movie.movielanguages.join(', ')}
          </Typography>
          <Typography variant="body2">
            <span className="font-semibold">Countries:</span> {movie.moviecountries.join(', ')}
          </Typography>
          <Typography variant="body2">
            <span className="font-semibold">Genres:</span> {movie.moviegenres.join(', ')}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default MovieItem;
