export const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img
        src={pizzaObj.photoName}
        alt='tasty pizza'
      />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
};
