"use client ";

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const id = action.payload.id;

     

      
      const existingItem = state.value.find((item) => item.data.id === id);

      if (existingItem) {
        console.log("IDFFFFF")
        // If item exists, increment the count property
        existingItem.count += 1;
      } else {
        console.log("ELSEEE")
        // If item doesn't exist, add it to the cart with count initialized to 1
        state.value.push({ data: action.payload, count: 1 });
      }
    },
  
    

    remove: (state) => {
      state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
