import React, {useContext} from "react";
import useBeers from "components/home/ListBeers/useBeers";
import ListOfItems from "components/commons/ListOfItems";
import ListBeerItem from "components/home/ListBeers/ListBeerItem";
import CartContext from "utils/CartContext";


function ListBeers() {
  const { addToCart }:any = useContext(CartContext);
  const [beers] = useBeers();

  return (
    <ListOfItems
      items={beers}
      Element={ListBeerItem}
      actions={{ addToCart }}
      loading={true}
      grid={true}
    />
  );
}

export default ListBeers;
