import { createSlice } from "@reduxjs/toolkit";
import IBeer from "models/IBeer";

export const beerSlice = createSlice({
  name: "beers",
  initialState: [],
  reducers: {
    setBeersStore: (state:any, action: any): any => {
      return action.payload;
    },
  },
});

export const { setBeersStore } = beerSlice.actions;
export const getBeersStore:(state:any) => IBeer[] = (state: any) => state.beers;

export default beerSlice.reducer;