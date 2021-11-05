import React, {useReducer} from 'react';
import CartContext from './cart-context';


const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch(action.type){
    case 'ADD_CART_ITEM': {
      const updatedArray = state.items.concat(action.item)
      const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price
      return {
        items: updatedArray,
        totalAmount: updatedTotalAmount
      }
    }
      default:
        return defaultCartState
  }
}

function CartProvider(props) {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD_CART_ITEM', item: item})
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
