import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state:any, action):any => {
      const { id } = action.payload;
      let found = false;
      
      const newCart = state.map((itemWithCount:any) => {
        const { count, item } = itemWithCount;
        const itemFound = item.id === id;
        if (!found) found = itemFound;
  
        return itemFound ? { item, count: count + 1 } : itemWithCount;
      });

      return found ? [...newCart] : [...state, { item:action.payload, count: 1 }];
    },
    removeFromCart: (state:any, action:any):any => {
      const id = action.payload;

      const newCart = state.filter((itemWithCount: any) =>{
        const { item }:any = itemWithCount;
        return item.id !== id
      })

      return newCart
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartCount = (state:any) => state.cart;

export default cartSlice.reducer;
