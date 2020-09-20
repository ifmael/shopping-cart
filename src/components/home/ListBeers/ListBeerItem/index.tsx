import React from 'react';
import { useDispatch } from 'react-redux';
import IBeer from 'models/IBeer';
import styles from './styles.module.scss';

interface ListOfItemsProps {
  item: IBeer;
  addToCart: any;
}

function ListBeerItem({ item, addToCart }: ListOfItemsProps): JSX.Element {
  const { name, image_url }: { name: string; image_url: string } = item;
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
