import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import reducers from "../slices/productSlice";
export const store = configureStore({
  reducer: {
    productSlice: reducers
  },
}
);