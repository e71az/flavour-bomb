import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from '../components/Category';
import { selectAllRecipes, fetchRecipes } from '../reducers/recipeSlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const recipeCategories = useSelector(selectAllRecipes);
  const { value, status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  console.log(value, status, recipeCategories);

  let content;

  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = recipeCategories.map((category) => (
      <Category key={category.idCategory} category={category} />
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  // const categories = value.map((category) => (
  //   <Category key={category.idCategory} category={category} />
  // ));

  return (
    <section className="categories-list">
      <h1>Recipe Categories</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>

      {content}
    </section>
  );
};

export default CategoryList;
