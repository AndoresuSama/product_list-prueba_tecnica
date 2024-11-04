import './DetailedView.css';
import PropTypes from 'prop-types';

export const DetailedView = ({ item: { id, title, category, description, detail: { info, price, address } }, onClose }) => (
  <div className="detailed item-card">
    <div className="item-card__content">
      <button className="item-card__close-button" onClick={() => onClose()}>X</button>
      <div className="item-card__image" id={id}/>
      <div className="item-card__info" alt={title}>
        <h1>{title}</h1>
        <p>{'Categoría: ' + category}</p>
        <p>{description}</p>
        <h2>Detalles</h2>
        <p>{info}</p>
        <h2 className='item-card__price'>{'$' + price}</h2>
        <p>{'Vendedor: ' + address}</p>
      </div>
    </div>
  </div>
);

DetailedView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    detail: PropTypes.shape({
      info: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired
    })
  }).isRequired,
  onClose: PropTypes.func.isRequired
}