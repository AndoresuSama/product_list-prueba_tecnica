import './ItemCard.css';

export const ItemCard = (item) => {
  const { id, title, description } = item.item;
  return (
    <div itemID={id} className="item-card">
      <div className="item-card__image"></div>
      <div className="item-card__info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )

};
