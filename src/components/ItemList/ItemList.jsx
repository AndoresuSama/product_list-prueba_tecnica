import './ItemList.css';
import { ItemCard } from '../ItemCard/ItemCard.jsx';

export const ItemList = (items) => {
  return (
    <>
    <div className="item-list">
      {items.items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
    <p className="item-list__message">No hay mas productos para mostrar...</p>
    </>
  )

};
