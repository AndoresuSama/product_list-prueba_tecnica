import './ItemList.css';
import { ItemCard } from '../ItemCard/ItemCard';
import PropTypes from 'prop-types';

export const ItemList = ({ items = [] }) => (
  <>
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      {items.length === 0 && <p className="item-list__message">No se encontraron productos</p>}
    </div>
    {!!items.length && <p className="item-list__message">No hay mas productos para mostrar...</p>}
  </>
);

ItemList.propTypes = {
  items: PropTypes.array
};
