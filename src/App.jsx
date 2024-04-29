import React, { useState } from 'react';
import './App.css';
import moviesData from './Data/movies.json';
import MovieList from './Components/MovieList';
import FilterControls from './Components/FilterControls';

function App() {
  // Load the movies data
  const [movies, setMovies] = useState(moviesData);

  // Extract languages, countries, and genres from movies data
  const languages = [...new Set(movies.map(movie => movie.movielanguages).flat())];
  const countries = [...new Set(movies.map(movie => movie.moviecountries).flat())];
  const genres = [...new Set(movies.map(movie => movie.moviegenres).flat())];

  // State variables for filters
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  // Function to filter movies based on selected options
  const filterMovies = () => {
    let filteredMovies = movies.filter(movie => {
      if (selectedLanguage && !movie.movielanguages.includes(selectedLanguage)) return false;
      if (selectedCountry && !movie.moviecountries.includes(selectedCountry)) return false;
      if (selectedGenre && !movie.moviegenres.includes(selectedGenre)) return false;
      return true;
    });
    return filteredMovies;
  };

  return (
    <div className="App" style={{  minHeight: '100vh' }}>
      {/* Render FilterControls component */}
      <FilterControls
        languages={languages}
        countries={countries}
        genres={genres}
        selectedLanguage={selectedLanguage}
        selectedCountry={selectedCountry}
        selectedGenre={selectedGenre}
        onLanguageChange={setSelectedLanguage}
        onCountryChange={setSelectedCountry}
        onGenreChange={setSelectedGenre}
      />
      {/* Render the MovieList component with filtered movies */}
      <MovieList movies={filterMovies()} />
    </div>
  );
}

export default App;
