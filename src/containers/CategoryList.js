import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from '../components/Category';
import { selectAllRecipes, fetchRecipes } from '../reducers/recipeSlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectAllRecipes);
  const { value } = useSelector((state) => state.recipe);
  const recipeStatus = useSelector((state) => state.recipe.status);

  useEffect(() => {
    if (recipeStatus === 'idle') {
      dispatch(fetchRecipes());
    }
  }, [recipeStatus, dispatch]);

  console.log(value, recipeStatus, recipes);

  // const categories = value.map((category) => (
  //   <Category key={category.idCategory} category={category} />
  // ));

  return (
    <>
      {toString(recipes)}
      {/* <button onClick={() => dispatch(fetchRecipes())}>
        Load more categories
      </button> */}
      {/* <div>{categories}</div> */}
    </>
  );
};

export default CategoryList;
