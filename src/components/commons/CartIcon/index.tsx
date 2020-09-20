import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartCount } from "utils/cartSlice";
import ICartItem from "models/ICartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

function CartIcon() {
  const cart:ICartItem[] = useSelector(cartCount);
  const countItems:number = cart.reduce((acc:number, item:ICartItem) => acc + item.count, 0);

  return (
    <Link to="/shopping-cart" className={styles.cartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={styles.nItems}>{countItems}</span>
    </Link>
  );
}

export default CartIcon;
