import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartCount } from "utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

function CartIcon() {
  const cart:any[] = useSelector(cartCount);
  const countItems = cart.reduce((acc:any, item:any) => acc + item.count, 0);

  return (
    <Link to="/shopping-cart" className={styles.cartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={styles.nItems}>{countItems}</span>
    </Link>
  );
}

export default CartIcon;
