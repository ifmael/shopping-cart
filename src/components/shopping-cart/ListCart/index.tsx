import React from "react";
import { useSelector } from "react-redux";
import { cartCount, removeFromCart } from "utils/cartSlice";
import ListOfItems from "components/commons/ListOfItems";
import ListCartItem from "components/shopping-cart/ListCart/ListCartItem";

function ListCart() {
  const cart = useSelector(cartCount);

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
