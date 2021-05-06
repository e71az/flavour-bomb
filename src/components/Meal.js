const Meal = ({ meal: { idMeal, strMeal, strMealThumb } }) => {
  return (
    <a href="#">
      <div
        className="img-meal-container"
        style={{
          backgroundImage: `url(${strMealThumb})`,
        }}
      >
        <h5 className="transparent-banner pl-3 py-2">{strMeal}</h5>
      </div>
    </a>
  );
};

export default Meal;
