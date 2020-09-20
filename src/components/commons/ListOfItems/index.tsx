import React from "react";
import IBeer from "models/IBeer";
import ICartItem from "models/ICartItem";
import styles from "./styles.module.scss";

interface ListOfItemsProps {
  items: (IBeer| ICartItem)[],
  Element: any,
  actions: object,
  loading: boolean,
  grid: boolean
};


function ListOfItems({ items, Element, actions, loading, grid }: ListOfItemsProps) {
  const showList:boolean = items && items.length > 0;

  return showList === true ? (
    <ul className={grid ? styles.grid : styles.list}>
      {items.map((item:any) => {
        const { id } = grid ? item : item.item;
        
        return (
          <li key={id} className={grid ? styles.gridItem : styles.listItem}>
            <Element item={item} {...actions} /> 
          </li>
        );
      })}
    </ul>
  ) : loading ? (
    <span>Cargando</span>
  ) : (
    <span> No hay elementos</span>
  );
}

export default ListOfItems;
