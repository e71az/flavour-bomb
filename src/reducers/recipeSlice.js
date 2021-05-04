import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      return response.data.categories;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchMeals = createAsyncThunk('recipes/fetchMeals', async () => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    );
    return response.data.meals;
  } catch (error) {
    console.log(error);
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state, action) => ({
        status: 'loading',
      }))
      .addCase(fetchRecipes.fulfilled, (state, action) => ({
        status: 'succeeded',
        value: action.payload,
      }))
      .addCase(fetchRecipes.rejected, (state, action) => ({
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(fetchMeals.pending, (state, action) => ({
        status: 'loading',
      }))
      .addCase(fetchMeals.fulfilled, (state, action) => ({
        status: 'succeeded',
        value: action.payload,
      }))
      .addCase(fetchMeals.rejected, (state, action) => ({
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAllRecipes = (state) => state.recipe.value;
export const selectRecipeById = (state, recipeId) =>
  state.recipe.value.find((recipe) => recipe.id === recipeId);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default counterSlice.reducer;
