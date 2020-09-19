import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "utils/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
