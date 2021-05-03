const Category = ({
  category: {
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  },
}) => {
  return (
    <a href='hello.com'>
      <h5>{idCategory}</h5>
      <h5>{strCategory}</h5>
      <img src={strCategoryThumb} />
      <h5>{strCategoryDescription}</h5>
    </a>
  );
};

export default Category;
