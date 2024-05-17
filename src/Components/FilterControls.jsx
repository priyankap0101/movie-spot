import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FilterControls = ({
  languages,
  countries,
  genres,
  selectedLanguage,
  selectedCountry,
  selectedGenre,
  onLanguageChange,
  onCountryChange,
  onGenreChange,
}) => {
  // State to manage label shrink
  const [labelShrunk, setLabelShrunk] = useState({
    language: false,
    country: false,
    genre: false,
  });

  const handleShrink = (label) => {
    setLabelShrunk((prev) => ({
      ...prev,
      [label]: true,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 bg-blue-900 rounded-lg sm:grid-cols-2 md:grid-cols-3">
      <FormControl variant="outlined" style={{ width: '100%' }}>
        <InputLabel
          htmlFor="language"
          className="text-xl font-bold"
          shrink={false} // Set shrink to false
        >
          Language
        </InputLabel>
        <Select
          id="language"
          value={selectedLanguage}
          onChange={(e) => {
            onLanguageChange(e.target.value);
            handleShrink('language');
          }}
          className="w-full text-gray-900"
          style={{ backgroundColor: '#FEEBC8' }}
          MenuProps={{ PaperProps: { style: { backgroundColor: '#FEEBC8' } } }}
        >
          <MenuItem value="">All</MenuItem>
          {languages.map((language, index) => (
            <MenuItem key={index} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ width: '100%' }}>
        <InputLabel
          htmlFor="country"
          className="text-xl font-bold"
          shrink={false} // Set shrink to false
        >
          Country
        </InputLabel>
        <Select
          id="country"
          value={selectedCountry}
          onChange={(e) => {
            onCountryChange(e.target.value);
            handleShrink('country');
          }}
          className="w-full text-gray-900"
          style={{ backgroundColor: '#FEEBC8' }}
          MenuProps={{ PaperProps: { style: { backgroundColor: '#FEEBC8' } } }}
        >
          <MenuItem value="">All</MenuItem>
          {countries.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ width: '100%' }}>
        <InputLabel
          htmlFor="genre"
          className="text-xl font-bold"
          shrink={false} // Set shrink to false
        >
          Genre
        </InputLabel>
        <Select
          id="genre"
          value={selectedGenre}
          onChange={(e) => {
            onGenreChange(e.target.value);
            handleShrink('genre');
          }}
          className="w-full text-gray-900"
          style={{ backgroundColor: '#FEEBC8' }}
          MenuProps={{ PaperProps: { style: { backgroundColor: '#FEEBC8' } } }}
        >
          <MenuItem value="">All</MenuItem>
          {genres.map((genre, index) => (
            <MenuItem key={index} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterControls;
