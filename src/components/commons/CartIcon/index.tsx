import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "utils/CartContext";
import styles from "./styles.module.scss";

function CartIcon() {
  const { cart }: any = useContext(CartContext);
  const countItems = cart.reduce((acc:any, item:any) => acc + item.count, 0);

  return (
    <Link to="/shopping-cart" className={styles.cartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={styles.nItems}>{countItems}</span>
    </Link>
  );
}

export default CartIcon;
