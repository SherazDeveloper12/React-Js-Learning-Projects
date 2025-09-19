import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/products";
import reducers from "../slices/productSlice";
import reducerss from "../slices/studentSlice";
import authReducer from "../slices/authslice";
export const store = configureStore({
  reducer: {
    productSlice: reducers,
    studentSlice: reducerss,
    products: productReducer,
    auth: authReducer,
  },
}
);