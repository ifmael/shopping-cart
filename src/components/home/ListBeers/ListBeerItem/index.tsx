import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

type ListOfItemsProps = {
  item: any,
  addToCart: any,
};

function ListBeerItem({ item, addToCart }:ListOfItemsProps) {
  const { name, image_url } = item;
  const dispatch = useDispatch();

  return (
    <div className={styles.innerItem}>
      <img src={image_url} alt={`${name}-img`} className={styles.img} />
      <p>{name}</p>
      <button onClick={() => dispatch(addToCart(item))}>Añadir al carrito</button>
    </div>
  );
}

export default ListBeerItem;
