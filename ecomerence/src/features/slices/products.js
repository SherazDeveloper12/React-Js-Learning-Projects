import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from "../../config/firestore"
import {collection, addDoc, query, where, getDocs, setDoc, doc,deleteDoc, DocumentReference, updateDoc} from "firebase/firestore"
import { studentSlice } from "./studentSlice";
import { act } from "react";

export const fetchingProducts = createAsyncThunk(
    "fetchingProducts",
    async()=>{
        const products = await getDocs(collection(db, "Products"))
        const fetchedProducts = []
        products.forEach( (product)=>{
            fetchedProducts.push({
                id: product.id,
                ...product.data()
            })
        })
        return fetchedProducts
    }
)

export const addingProducts = createAsyncThunk(
    "addingProducts",
    async(product)=>{
        const docRef = await addDoc(collection(db,"Products"),product)
        const newProduct = {
            id: docRef.id,
            ...product
        }
        return newProduct
    }
)

export const deleteProduct = createAsyncThunk(
    "deleteProduct",
    async(id)=>{
        await deleteDoc(doc(db, "Products", id));
        return id
    }
)
export const updateProduct = createAsyncThunk(
    "updateProduct",
    async(product)=>{
        console.log("product in update product action",product)
        const docRef = doc(db,"Products",product.id)
        await updateDoc(docRef, product)
        return product
    }
)
export const FilterProductsByCategory = createAsyncThunk(
    "FilterProductsByCategory",
    async(category)=>{
        console.log("category in filter action", category)
        const docRef = collection(db,"Products")
        const q = query(docRef, where("Category", "==", category))
        const products = await getDocs(q)
       
        const filteredProducts = []
        products.forEach( (product)=>{
            filteredProducts.push({
              id: product.id,
                ...product.data()
            })
        })
         console.log("products in filter action", filteredProducts)
       return filteredProducts
    }
)
// Product Slice
export const products = createSlice({
   name: "Products",
   initialState:{
    Products: [],
    updateProducts: null,
    filteredProducts: null
   },
   reducers:{
    updateMyProduct: (state,action)=>{
    let productBeingUpdated = state.Products.filter((product)=> product.id === action.payload)
     state.updateProducts= productBeingUpdated[0]
        console.log("state of product in reducer that is being updated after updating",state.updateProducts)
   },
   clearUpdateProduct: (state,action)=>{
    state.updateProducts= action.payload
   },
   restfilteredProducts: (state, action)=>{
    console.log("action in reset filter", action.payload)
    state.filteredProducts = null
   },},
   extraReducers:(builder)=>{
    builder.addCase(fetchingProducts.fulfilled,(state,action)=>{
        state.Products = action.payload
        
    })
    builder.addCase(addingProducts.fulfilled,(state,action)=>{
        let addProduct = [action.payload,...state.Products]
        state.Products = addProduct
    })
    builder.addCase(deleteProduct.fulfilled,(state,action)=>{
       let filteredProduct = state.Products.filter((product)=> product.id !== action.payload)
       state.Products =filteredProduct
    })
    builder.addCase(updateProduct.fulfilled,(state,action)=>{
        state.Products = state.Products.map((product)=>
            product.id === action.payload.id? action.payload : product)
        state.updateProducts = null
    })
    builder.addCase(FilterProductsByCategory.fulfilled,(state,action)=>{
       state.filteredProducts = action.payload })
    }
})
export const { updateMyProduct,clearUpdateProduct,restfilteredProducts } = products.actions;
export default products.reducer