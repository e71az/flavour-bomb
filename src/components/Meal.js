/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropTypes } from 'prop-types';

const Meal = ({ meal: { strMeal, strMealThumb } }) => (
  <a href="#">
    <div
      data-testid="meal"
      className="img-meal-container"
      style={{
        backgroundImage: `url(${strMealThumb})`,
      }}
    >
      <h5 className="transparent-banner pl-3 py-2">{strMeal}</h5>
    </div>
  </a>
);

Meal.propTypes = {
  meal: PropTypes.isRequired,
};

export default Meal;
