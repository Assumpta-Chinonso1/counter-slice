import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, themeReducer} from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
   
  },
});
