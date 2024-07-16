import { Order } from './order';

export const Footer = () => {
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
