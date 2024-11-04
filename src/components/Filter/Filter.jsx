import './Filter.css';
import propTypes from 'prop-types';

export const Filter = ({ onChange }) => (
  <div className="filter">
    <input
      className="filter__input"
      type="text"
      placeholder="Busca tu producto favorito"
      onChange={({ target: { value } }) => onChange(value)}
    />
  </div>
)

Filter.propTypes = {
  onChange: propTypes.func.isRequired
};
