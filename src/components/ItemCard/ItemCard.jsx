import './ItemCard.css';
import PropTypes from 'prop-types';

export const ItemCard = ({ item: { id, title, category, description } }) => (
  <div className="item-card" itemID={id}>
    <div className="item-card__image" />
    <div className="item-card__info">
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};
