import React from "react";
import styles from "./styles.module.scss";

type ListOfItemsProps = {
  items: Array<any>,
  Element: any,
  actions: any,
  loading: boolean,
  grid: boolean
};


function ListOfItems({ items, Element, actions, loading, grid }: ListOfItemsProps) {
  const showList = items && items.length > 0;

  return showList === true ? (
    <ul className={grid ? styles.grid : styles.list}>
      {items.map((item) => {
        const { id } = item;
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
