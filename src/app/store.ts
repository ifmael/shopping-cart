import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'utils/cartSlice';
import beerReducer from 'utils/beerSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    beers: beerReducer,
  },
});
