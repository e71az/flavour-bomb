import { useDispatch } from 'react-redux';
import { mealFilter } from '../reducers/recipeSlice';
import { Link } from 'react-router-dom';

const Category = ({
  category: {
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  },
}) => {
  const dispatch = useDispatch();

  return (
    <Link to="/meals" onClick={() => dispatch(mealFilter(strCategory))}>
      <h5>{idCategory}</h5>
      <h5>{strCategory}</h5>
      <img src={strCategoryThumb} />
      <h5>{strCategoryDescription}</h5>
    </Link>
  );
};

export default Category;
