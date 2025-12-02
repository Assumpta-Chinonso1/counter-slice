import { createSlice } from "@reduxjs/toolkit";

//////////////////// COUNTER SLICE ////////////////////
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;

const themeSlice = createSlice({
  name: "theme",
  initialState: {mode: "light"},
   reducers:  {
     toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    }

  }
})


export const {toggleTheme} = themeSlice.actions


export const themeReducer = themeSlice.reducer

export const counterReducer = counterSlice.reducer

















































