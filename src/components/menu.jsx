import { pizzaData } from '../data/pizzadata';
import { Pizza } from './pizza';

export const Menu = () => {
  const pizzas = pizzaData; // = pizza array
  const numPizzas = pizzas.length; // = how many pizzas

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          {/* Use React.Fragment if key is required, e.g. li */}
          <p>
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
};
