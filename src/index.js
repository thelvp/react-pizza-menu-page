import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData; // = pizza array
  const numPizzas = pizzas.length; // = how many pizzas

  // 0. Conditional rendering - short circuiting - if numPizzas is 0, falsy so second item = which is the <ul></ul> - is not rendered. If num is > 0, menu gets rendered.
  // 1. Map over pizza array
  // 2. Put data of each pizza via .map in prop pizzaObj to pass to pizza component
  // 3. In pizza component, let propsdata land in certain places

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className='pizzas'>
          {pizzas.map((pizza) => (
            <Pizza
              pizzaObj={pizza}
              key={pizza.name}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

const Pizza = (props) => {
  return (
    <li className='pizza'>
      <img
        src={props.pizzaObj.photoName}
        alt='tasty pizza'
      />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {/* // conditional rendering - short circuiting*/}
      {isOpen && (
        <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online!</p>
          <button className='btn'>Order</button>
        </div>
      )}
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
