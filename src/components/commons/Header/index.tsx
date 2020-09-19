import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "components/commons/CartIcon";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        Cervezas Frias
        <span role="img" aria-label="cervezas frias">
          🍺🍺
        </span>
      </Link>
      <CartIcon />
    </header>
  );
}

export default Header;
