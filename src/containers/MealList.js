import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Meal from '../components/Meal';
import { selectAllRecipes, fetchMeals } from '../reducers/recipeSlice';

const MealList = () => {
  const dispatch = useDispatch();
  const meals = useSelector(selectAllRecipes);
  const { value, status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (status === 'categories') {
      dispatch(fetchMeals());
    }
  }, [status, dispatch]);

  console.log(value, status, meals);

  let content;

  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'meals') {
    content = meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />);
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section className="categories-list">
      {content}
    </section>
  );
};

export default MealList;
