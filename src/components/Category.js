const Category = ({
  category: {
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  },
}) => {
  return (
    <div>
      <h5>{idCategory}</h5>
      <h5>{strCategory}</h5>
      <img src={strCategoryThumb} />
      <h5>{strCategoryDescription}</h5>
    </div>
  );
};

export default Category;
