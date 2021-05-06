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
      {/* <img src={strCategoryThumb} className="img-container" /> */}
      {/* <h5>{strCategoryDescription}</h5> */}

      <div
        className="img-container"
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
