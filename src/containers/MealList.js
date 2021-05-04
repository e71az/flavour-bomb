import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Meal from '../components/Meal';
import { selectAllRecipes, fetchMeals } from '../reducers/recipeSlice';

const MealList = () => {
  const dispatch = useDispatch();
  const meals = useSelector(selectAllRecipes);
  const { value, status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMeals());
    }
  }, [status, dispatch]);

  console.log(value, status, meals);

  let content;

  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />);
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section className="categories-list">
      <h1>Recipe Categories</h1>
      {content}
    </section>
  );
};

export default MealList;
