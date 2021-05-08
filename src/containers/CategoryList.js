import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from '../components/Category';
import { selectAllRecipes, fetchRecipes } from '../reducers/recipeSlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const recipeCategories = useSelector(selectAllRecipes);
  const { status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (status === 'idle' || status === 'meals') {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = (
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    );
  } else if (status === 'categories') {
    content = recipeCategories.map((category) => (
      <Category key={category.idCategory} category={category} />
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return <section className="categories-list">{content}</section>;
};

export default CategoryList;
