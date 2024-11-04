import './ItemList.css';
import { ItemCard } from '../ItemCard/ItemCard';
import PropTypes from 'prop-types';

export const ItemList = ({ items = [], onClick }) => (
  <>
    <ul className="item-list">
    {items.map((item) => (
      <li key={item.id} className="item-list__item">
        <ItemCard item={item} onClick={onClick} />
      </li>
    ))}
    </ul>
    {items.length === 0 && <p className="item-list__message">No se encontraron productos</p>}
    {!!items.length && <p className="item-list__message">No hay mas productos para mostrar...</p>}
  </>
  
);

ItemList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func.isRequired
};

