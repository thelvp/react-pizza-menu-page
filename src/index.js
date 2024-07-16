import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/header';
import { Menu } from './components/menu';
import { Footer } from './components/footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

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
