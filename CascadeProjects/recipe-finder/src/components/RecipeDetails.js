import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );
        setRecipe(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!recipe) return null;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography gutterBottom variant="h4" component="h2">
              {recipe.title}
            </Typography>
            <CardMedia
              component="img"
              height="400"
              image={recipe.image}
              alt={recipe.title}
              sx={{ mt: 2 }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Ready in {recipe.readyInMinutes} minutes • {recipe.servings} servings
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            <List>
              {recipe.extendedIngredients.map((ingredient) => (
                <ListItem key={ingredient.id}>
                  <ListItemText
                    primary={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Instructions
            </Typography>
            {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  {index + 1}. {step.step}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Original Recipe
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetails;
