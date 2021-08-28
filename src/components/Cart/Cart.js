import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = (
    <ul className={classes.cart_items}>
      {[{ id: 'c1', name: 'Kässpatzen', amount: 2, price: 11.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button__alt}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
