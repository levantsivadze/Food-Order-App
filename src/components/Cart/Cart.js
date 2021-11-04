import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        { id: 'c2', name: 'Sushi', description: 'Tasty Sushi', price: 12.59 },
      ].map((meal) => (
        <li>{meal.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.12</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
