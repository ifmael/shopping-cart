import React, { useState } from "react";

const Context = React.createContext({});

export function CartProvider({ children }:any) {
  const [cart, setCart] = useState([]);

  const addToCart = (item:any) => {
    const { id } = item;
    let found = false;

    const newItemInCart = cart.map((itemWithCount:any) => {
      const { count, item } = itemWithCount;
      const itemFound = item.id === id;
      if (!found) found = itemFound;

      return itemFound ? { item, count: count + 1 } : itemWithCount;
    });
    const newCart:any = found ? [...newItemInCart] : [...cart, { item, count: 1 }]
    setCart(newCart);
  };

  const removeFromCart = (id:number) => {
    setCart(cart.filter(({ item }:any) => item.id !== id));
  };

  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
