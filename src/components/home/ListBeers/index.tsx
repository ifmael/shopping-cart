import React from 'react';
import useBeers from 'components/home/ListBeers/useBeers';
import ListOfItems from 'components/commons/ListOfItems';
import ListBeerItem from 'components/home/ListBeers/ListBeerItem';
import IBeer from 'models/IBeer';
import { addToCart } from 'utils/cartSlice';

function ListBeers(): JSX.Element {
  const [beers]: IBeer[][] = useBeers();

  return <ListOfItems items={beers} Element={ListBeerItem} actions={{ addToCart }} loading={true} grid={true} />;
}

export default ListBeers;
