import React from "react";
import { useSelector } from "react-redux";
import { cartCount, removeFromCart } from "utils/cartSlice";
import ListOfItems from "components/commons/ListOfItems";
import ListCartItem from "components/shopping-cart/ListCart/ListCartItem";
import ICartItem from "models/ICartItem";

function ListCart() {
  const cart:ICartItem[] = useSelector(cartCount);

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
