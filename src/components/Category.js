const Category = ({
  category: {
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  },
}) => {
  return (
    <a href="/meals">
      <h5>{idCategory}</h5>
      <h5>{strCategory}</h5>
      <img src={strCategoryThumb} />
      <h5>{strCategoryDescription}</h5>
    </a>
  );
};

export default Category;
