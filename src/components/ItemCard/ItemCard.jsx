import './ItemCard.css';
import PropTypes from 'prop-types';

export const ItemCard = ({ item: { id, title, category, description }, onClick }) => (
  <button className="item-card" onClick={(e) => onClick(e.target)}>
    <div className="item-card__image" id={id}/>
    <div className="item-card__info" alt={title}>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  </button>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
