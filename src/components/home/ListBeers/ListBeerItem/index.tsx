import React from "react";
import styles from "./styles.module.scss";

type ListOfItemsProps = {
  item: any,
  addToCart: any,
};

function ListBeerItem({ item, addToCart }:ListOfItemsProps) {
  const { name, image_url } = item;

  return (
    <div className={styles.innerItem}>
      <img src={image_url} alt={`${name}-img`} className={styles.img} />
      <p>{name}</p>
      <button onClick={() => addToCart(item)}>Añadir al carrito</button>
    </div>
  );
}

export default ListBeerItem;
