import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

type ListCartItemProps = {
  item: any,
  removeFromCart: any,
};


function ListCartItem({ item, removeFromCart }: ListCartItemProps) {
  const {
    item: { id, name, image_url },
    count,
  } = item;
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <span>{name}</span>
        <span>Cantidad: {count}</span>
        <button onClick={() => dispatch(removeFromCart(id))}>Eliminar</button>
      </div>
      <div className={styles.imgContainer}>
        <img src={image_url} alt={`${name}-img`} className={styles.img} />
      </div>
    </div>
  );
}

export default ListCartItem;
