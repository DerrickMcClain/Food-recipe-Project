import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const searchRecipes = async (query, filters = {}) => {
  try {
    const params = {
      apiKey: API_KEY,
      query,
      ...filters,
      number: 12,
    };
    const response = await axios.get(BASE_URL, { params });
    return response.data.results;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Network error' };
  }
}; 