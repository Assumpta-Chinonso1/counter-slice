import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",

  items: [
    { id: "p1", name: "Hat", qty: 1, price: 1000 },
    { id: "p2", name: "Shoes", qty: 2, price: 500 },
    { id: "p3", name: "Gloves", qty: 3, price: 750 },
    { id: "p4", name: "Jacket", qty: 1, price: 3000 },
    { id: "p5", name: "Socks", qty: 5, price: 250 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((it) => it.id === id);
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((it) => it.id === id);
      if (item && item.qty > 0) item.qty -= 1;
    },

    setQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((it) => it.id === id);
      if (item) item.qty = Math.max(0, Number(qty) || 0);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((it) => it.id !== action.payload);
    },
  },
});

export const {
  toggleTheme,
  increaseQty,
  decreaseQty,
  setQty,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;





















