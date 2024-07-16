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

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        // 1. .map() over array to render each pizza in a pizza Component
        // 2. pass entire pizza object to component via pizzaObj prop
        // 3. use pizza object data in component by using props. pizzaObj.name etc.
        <ul className='pizzas'>
          {pizzas.map((pizza) => (
            <Pizza
              pizzaObj={pizza}
              key={pizza.name}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
};

const Pizza = (props) => {
  // return nothing, if a condition is true
  if (props.pizzaObj.soldOut) return null;

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
      {isOpen ? (
        <Order
          openHour={openHour}
          closeHour={closeHour}
        />
      ) : (
        <p className='order'>
          We're closed. We're happy to welcome you as per {openHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = (props) => {
  return (
    <div className='order'>
      <p>
        We're open from {props.openHour}:00 until {props.closeHour}:00. Come
        visit us or order online!
      </p>
      <button className='btn'>Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// =====================================
// Conditional rendering - three options
// =====================================

// -------------------------------------
// 1. Short circuiting with &&
// -------------------------------------
// {isOpen && (
//     <p>We're open until {closeHour}:00. Come visit us!</p>
// )}
//
// Explanation: only when first value (isOpen) is truthy, the second value gets returned (and thus the text is shown on the page).

// -------------------------------------
// 2. Ternary operator
// -------------------------------------
// {isOpen ? (
//   <div className='order'>
//     <p>We're open until {closeHour}:00. Come visit us!</p>
//   </div>
// ) : (
//   <p className='order'>
//     We're closed. We're happy to welcome you as per {openHour}:00.
//   </p>
// )}
//
// Explanation: ternary operator - if isOpen is true ? then ... : and else...

// -------------------------------------
// 3. If/else statement around return
// -------------------------------------
// if (!isOpen) return <p>closed</p>;
// if (isOpen) return <p>open</p>;
//
// Explanation: the most regular expression, but you cannot use it in JSX so it should be outside of the return. This makes it a bit less good to use, since often you have a div around it etc, and then you have to do it twice for each return. s
