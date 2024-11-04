import './Filter.css';
import propTypes from 'prop-types';

export const Filter = ({ onChange }) => (
  <div className="filter" role="search">
    <input
      className="filter__input"
      id="filter-input"
      type="search"
      placeholder="Filtrar por título o categoría"
      onChange={({ target: { value } }) => onChange(value)}
    />
  </div>
)

Filter.propTypes = {
  onChange: propTypes.func.isRequired
};

