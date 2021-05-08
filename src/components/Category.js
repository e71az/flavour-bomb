import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { mealFilter } from '../reducers/recipeSlice';

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
      <div
        data-testid="category"
        className="img-category-container"
        style={{
          backgroundImage: `url(${strCategoryThumb})`,
        }}
      >
        <h5 className="transparent-banner pl-3 py-2">{strCategory}</h5>
      </div>
    </Link>
  );
};

export default Category;
