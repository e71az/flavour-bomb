/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';

const CategoryFilter = ({ filteredCategories, handleFilterChange }) => (
  <div className="col-sm-2 ">
    <select className="level" onChange={(event) => handleFilterChange(event)}>
      <option value="All">All</option>
      {filteredCategories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  filteredCategories: PropTypes.array.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
