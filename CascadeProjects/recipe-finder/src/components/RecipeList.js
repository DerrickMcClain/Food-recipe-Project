import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

const RecipeList = ({
  recipes,
  loading,
  error,
  addToFavorites,
  removeFromFavorites,
  favorites,
}) => {
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error" sx={{ my: 4 }}>{error}</Alert>;
  if (!recipes.length) return <Typography align="center" sx={{ my: 4 }}>No recipes found.</Typography>;

  return (
    <Container component="main" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ready in {recipe.readyInMinutes} minutes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Servings: {recipe.servings}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    component={Link}
                    to={`/recipe/${recipe.id}`}
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    View Recipe
                  </Button>
                  <Button
                    variant="outlined"
                    color={favorites.some(fav => fav.id === recipe.id) ? "primary" : "inherit"}
                    onClick={() => 
                      favorites.some(fav => fav.id === recipe.id)
                        ? removeFromFavorites(recipe.id)
                        : addToFavorites(recipe)
                    }
                  >
                    {favorites.some(fav => fav.id === recipe.id)
                      ? 'Remove from Favorites'
                      : 'Add to Favorites'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
