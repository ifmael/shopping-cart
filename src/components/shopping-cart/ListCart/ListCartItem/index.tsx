import React from 'react';
import { useDispatch } from 'react-redux';
import ICartItem from 'models/ICartItem';
import styles from './styles.module.scss';

interface ListCartItemProps {
  item: ICartItem;
  removeFromCart: any;
}

function ListCartItem({ item, removeFromCart }: ListCartItemProps): JSX.Element {
  const {
    item: { id, name, image_url },
    count,
  }: ICartItem = item;
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
