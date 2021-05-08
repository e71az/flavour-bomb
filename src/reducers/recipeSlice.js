/* eslint-disable max-len, no-param-reassign, consistent-return, no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
  error: null,
  meal: null,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      return response.data.categories;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchMeals = createAsyncThunk(
  'recipes/fetchMeals',
  async (arg, { getState }) => {
    const state = getState();

    try {
      console.log(state.recipe.meal);

      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.recipe.meal}`,
      );
      return response.data.meals;
    } catch (error) {
      console.log(error);
    }
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    mealFilter: (state, action) => {
      state.meal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => ({
        status: 'loading',
        value: state.value,
        meal: state.meal,
      }))
      .addCase(fetchRecipes.fulfilled, (state, action) => ({
        status: 'categories',
        value: action.payload,
      }))
      .addCase(fetchRecipes.rejected, (state, action) => ({
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(fetchMeals.pending, (state) => ({
        status: 'loading',
        value: state.value,
        meal: state.meal,
      }))
      .addCase(fetchMeals.fulfilled, (state, action) => ({
        status: 'meals',
        value: action.payload,
        meal: state.meal,
      }))
      .addCase(fetchMeals.rejected, (state, action) => ({
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  mealFilter,
} = counterSlice.actions;

export const selectAllRecipes = (state) => state.recipe.value;
export const selectRecipeById = (state, recipeId) => state.recipe.value.find((recipe) => recipe.id === recipeId);

export default counterSlice.reducer;
