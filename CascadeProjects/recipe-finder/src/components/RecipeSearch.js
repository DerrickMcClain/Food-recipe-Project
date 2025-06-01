import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { searchRecipes } from '../services/api';

const RecipeSearch = ({ setRecipes, setLoading, setError }) => {
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState('');
  const [cuisine, setCuisine] = useState('');

  const diets = [
    'gluten free',
    'ketogenic',
    'vegetarian',
    'lacto vegetarian',
    'ovo vegetarian',
    'vegan',
    'pescetarian',
    'paleo',
    'primal',
    'whole30'
  ];

  const cuisines = [
    'american',
    'british',
    'caribbean',
    'chinese',
    'french',
    'greek',
    'indian',
    'italian',
    'japanese',
    'korean',
    'mexican',
    'mediterranean',
    'spanish',
    'thai',
    'vietnamese'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const filters = {};
      if (diet) filters.diet = diet;
      if (cuisine) filters.cuisine = cuisine;
      const results = await searchRecipes(query, filters);
      setRecipes(results);
    } catch (err) {
      setError(err.message || 'Failed to fetch recipes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 3,
        maxWidth: 800,
        mx: 'auto',
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Find Your Perfect Recipe
      </Typography>
      
      <TextField
        fullWidth
        label="Search Ingredients"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Dietary Preference</InputLabel>
          <Select
            value={diet}
            label="Dietary Preference"
            onChange={(e) => setDiet(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            {diets.map((dietType) => (
              <MenuItem key={dietType} value={dietType}>
                {dietType.replace(/\b\w/g, l => l.toUpperCase())}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Cuisine</InputLabel>
          <Select
            value={cuisine}
            label="Cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            {cuisines.map((cuisineType) => (
              <MenuItem key={cuisineType} value={cuisineType}>
                {cuisineType.replace(/\b\w/g, l => l.toUpperCase())}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Search Recipes
      </Button>
    </Box>
  );
};

export default RecipeSearch;
