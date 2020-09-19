import React, { useContext } from "react";
import ListOfItems from "components/commons/ListOfItems";
import CartContext from "utils/CartContext";
import ListCartItem from "components/shopping-cart/ListCart/ListCartItem";

function ListCart() {
  const { cart, removeFromCart }:any = useContext(CartContext);

  return (
    <ListOfItems
      items={cart}
      Element={ListCartItem}
      actions={{ removeFromCart }}
      loading={false}
      grid={false}
    />
  );
}

export default ListCart;
