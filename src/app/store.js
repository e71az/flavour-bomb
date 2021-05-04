import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../reducers/recipeSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});
