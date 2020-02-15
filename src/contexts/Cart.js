import React, { useState } from "react";

export const CartContext = React.createContext();

// Cart Provider
export const CartProvider = props => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = products => {
    console.log(`Adding to cart`, products);
    setCartItems(() => cartItems.concat(products));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
