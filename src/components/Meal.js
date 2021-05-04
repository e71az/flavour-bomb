const Meal = ({ meal: { idMeal, strMeal, strMealThumb } }) => {
  return (
    <a href="#">
      <h5>{idMeal}</h5>
      <h5>{strMeal}</h5>
      <img src={strMealThumb} />
    </a>
  );
};

export default Meal;
