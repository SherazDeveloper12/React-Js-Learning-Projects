import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {collection, addDoc,  getDoc} from "firebase/firestore"
import {db} from "../../config/firestore"
// firebase store getting products
// export const getProducts = createAsyncThunk(
// "products/getProducts",
// async()=>{
//   try {
//     const collectionRef = collection(db, "Product")
//     const response = await getDoc(collectionRef)
//     console.log("response from firenbase in st",response)
//   } catch (error) {
//     console.log(error)
//   }
//   return response
// }
// )
// fake store 
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    }
)


export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {  
    setProducts: (state, action) => {
      state.products = action.payload;
    } ,
   deleteProduct:(state, action) => {
      let filtered_Product = state.products.filter( (product) => product.id !== action.payload);
        state.products = filtered_Product
    },
    addPorduct:(state, action) => {
      let filtered_Product = [action.payload,...state.products ];
        state.products = filtered_Product
      console.log(filtered_Product)
    }
  },
    extraReducers:builder => {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
    }
});
export const { setProducts, deleteProduct, addPorduct } = productSlice.actions;
export default productSlice.reducer;    