const Meal = ({ meal: { idMeal, strMeal, strMealThumb } }) => (
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

export default Meal;
