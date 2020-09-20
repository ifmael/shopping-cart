import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from 'components/commons/CartIcon';
import styles from './styles.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        Cervezas Frias
        <span role="img" aria-label="cervezas frias">
          🍺🍺
        </span>
      </Link>
      <div className={styles.shoppingCart}>
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
